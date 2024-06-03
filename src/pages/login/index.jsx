import { useContext, useState } from "react";
import { PinkButton } from '../../components/Buttons/pinkButton';
import { Link, useNavigate } from "react-router-dom";
import { UserGlobal } from "../../context/userContext";
import { InputText } from "../../components/Inputs/input-text/inputTextComp";
import {loginSchema} from '../../hooks/useZod'


export function Login() {
  const { userLoginRequest, loading, error } = useContext(UserGlobal);
  const navegar = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSemArroba, setEmailSemArroba] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState(false);

  const handleEmailChange = (event) => {
    setEmailSemArroba(event.target.value)
    setEmail(event.target.value);
    setInputError(false); 

    if (event.target.value.includes('@')) {
      setErrorMessage('Não é necessário inserir o "@".');
      setInputError(true); 
    } else {
      setErrorMessage('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let finalEmail = email;
    if (!email.endsWith('@senaisp.edu.br')) {
      finalEmail = email + '@senaisp.edu.br';
      setEmail(finalEmail);
    }

    const formData = {
      email: finalEmail,
      password: password
    };

    try {
      loginSchema.parse(formData);
    } catch (e) {
      setErrorMessage(e.errors[0].message);
      setInputError(true);
      return;
    }

    const success = await userLoginRequest(finalEmail,password );

    if (success) {
      navegar('/')
      console.log('Login bem-sucedido');
    } else {
      console.log(error);
      setErrorMessage(error || 'Erro durante o login. Por favor, tente novamente.');
    }
    console.log(finalEmail, password)
  };

  return (
    <div className="flex flex-col min-h-screen md:h-screen md:flex-row bg-preto">
      <div className="flex flex-col w-full min-h-screen bg-preto justify-start pl-10">
        <h1 className="text-h5 text-cinza-50 pt-20">Bem-vindo(a)</h1>
        <p className="text-cp2 text-cinza-50 pt-6 w-3/4">Com o nosso ERP, você poderá gerenciar suas finanças, controlar o estoque, acompanhar o desempenho das vendas e muito mais, tudo em um só lugar!</p>
        {/* <img src={loginimage} className='w-full aspect-video mt-10 relative right-6 top-20 md:top-0' alt='Login Image' /> */}
      </div>

      <div className="min-h-screen w-full mt-12 pt-10 md:pt-0 pl-6 md:pl-12 md:mt-0 bg-cinza-50 flex flex-col justify-center items-center md:items-start rounded-t-[16px] md:rounded-l-[16px]">
        <h3 className="text-h3 mb-8">Login</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4" noValidate>
          <div className={`relative ${inputError ? 'border-vermelho-300' : ''}`}>
          <span className={`absolute inset-y-0 ${inputError ? 'right-8' : 'right-4'}  top-[33px] flex items-center text-ct3 md:text-fun2 text text-roxo-50 p-1 md:p-2 bg-gradient-to-r from-[#BD3FD1] to-[#9332AE] rounded-lg w-auto h-8`}>@senaisp.edu.br</span>
            <InputText id='email' type='text' name='email' value={emailSemArroba} onChange={handleEmailChange} placeholder='Ex: marlene' required={true} disabled={loading} error={inputError} />
          </div>
          
          <InputText id='password' type='password' name='senha' value={password} onChange={handlePasswordChange} placeholder='Senha' required={true} disabled={loading} error={inputError} />
          {errorMessage && <p className="text-vermelho-300 text-fun2">{errorMessage}</p>}
          <Link to="/forgot" className="text-start text-rosa-400 text-fun2">Esqueci a senha </Link>
          <PinkButton text="Entrar" size="medium" action={null} align='end' loading={loading}/>

        </form>
      </div>
  </div>
  );
}