import React, { useState } from "react";
import { EmployeeContext } from "../../context/Employee";
import { PinkButton } from '../../components/Buttons/pinkButton';
import { Link } from "react-router-dom";
import { InputText } from "../../components/Inputs/input-text/inputTextComp";
import { employeeEmailSchema } from '../../hooks/useZod'; 
import { toastifyContext } from '../../context/toastifyContext';

export function ForgotPassword() {
  const {sendRecoveryEmail} = React.useContext(EmployeeContext)
  const { Notification } = React.useContext(toastifyContext);
  const [email, setEmail] = useState('');
  const [emailSemArroba, setEmailSemArroba] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState(false);
  const [loading, setLoading] = useState(false); 

  const handleEmailChange = (event) => {
    setEmailSemArroba(event.target.value);
    setEmail(event.target.value);
    setInputError(false);

    if (event.target.value.includes('@')) {
      setErrorMessage('Não é necessário inserir o "@".');
      setInputError(true);
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let finalEmail = email;
    if (!email.endsWith('@senaisp.edu.br')) {
      finalEmail = email + '@senaisp.edu.br';
      setEmail(finalEmail);
    }

    try {
      employeeEmailSchema.parse(finalEmail);
    } catch (e) {
      setErrorMessage(e.errors[0].message);
      setInputError(true);
      return;
    }

    setLoading(true);
    try {
      const success = await sendRecoveryEmail(email);
      if(success){
        setLoading(false);
        Notification("sucess", "Email de recuperação enviado. Por favor, verifique sua caixa de entrada.");
      } 
    } catch (error) {
      setLoading(false);
      Notification("error", "Erro ao enviar o email de recuperação. Por favor, tente novamente.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen md:flex-row bg-preto">
      <div className="flex flex-col w-full min-h-screen bg-preto justify-start pl-10">
        <h1 className="text-h5 text-cinza-50 pt-20">Recuperar Senha</h1>
        <p className="text-cp2 text-cinza-50 pt-6 w-3/4">
          Insira seu email para receber um link de redefinição de senha.
        </p>
      </div>

      <div className="min-h-screen w-full mt-12 pt-10 md:pt-0 pl-6 md:pl-12 md:mt-0 bg-cinza-50 flex flex-col justify-center items-center md:items-start rounded-t-[16px] md:rounded-l-[16px]">
        <h3 className="text-h3 mb-8">Recuperar Senha</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4" noValidate>
          <div className={`relative ${inputError ? 'border-vermelho-300' : ''}`}>
            <span className={`absolute inset-y-0 ${inputError ? 'right-8' : 'right-4'} top-[33px] flex items-center text-ct3 md:text-fun2 text text-roxo-50 p-1 md:p-2 bg-gradient-to-r from-[#BD3FD1] to-[#9332AE] rounded-lg w-auto h-8`}>
              @senaisp.edu.br
            </span>
            <InputText id='email' type='text' name='email' value={emailSemArroba} onChange={handleEmailChange} placeholder='Ex: marlene' required={true} disabled={loading} error={inputError} />
          </div>
          {errorMessage && <p className="text-vermelho-300 text-fun2">{errorMessage}</p>}
          <Link to="/login" className="text-start text-rosa-400 text-fun2 mt-4">Voltar para Login</Link>
          <PinkButton text="Enviar Email" size="medium" align='end' loading={loading} />
        </form>
      </div>
    </div>
  );
}
