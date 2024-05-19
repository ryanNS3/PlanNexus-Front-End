import React from 'react'
import { PinkButton } from '../../Buttons/pinkButton'
import { InputText } from '../../Inputs/input-text/inputTextComp'
import { modalContext } from '../../../context/modalContext';
import { toastifyContext } from '../../../context/toastifyContext';
import { EmployeeContext } from "../../../context/Employee";
import { InputRadioInformation } from '../../Inputs/input-radio-information';


export const EmployeeForm = () => {
    const { AddEmployee } = React.useContext(EmployeeContext);
    const {setIsOpenModal} = React.useContext(modalContext)
    const {Notification} = React.useContext(toastifyContext)
    const [email, setEmail ] = React.useState('')
    const [name, setName ] = React.useState('')
    const [nif, setNif ] = React.useState('')
    const [nivel_acesso, setNivel_acesso ] = React.useState('')
    const [error, setError ] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState('');

    const [finishForm, setFinishForm] = React.useState(false)

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      setError(false)
    };

    const handleNameChange = (event) => {
      setName(event.target.value);
      setError(false)
    };
    
    const handleNifChange = (event) => {
      setNif(event.target.value);
    };
    
    
    const handleSubmit = async (event) => {
      event.preventDefault()

      if(nif.length < 5) {
        setErrorMessage('O  NIF deve conter, no mínimo, 5 caracteres')
        setError(true)
        return;
      } else{
        setErrorMessage('')
        setError(false)
      }

      if (email.includes('@')) {
        setErrorMessage('Não é necessário inserir o domínio do email.');
        setError(true); 
      } else {
        setErrorMessage('');
        setError(false)
      }

      if (!email || !name) {
        setErrorMessage('Preencha todos os campos obrigatórios!');
        setError(true); 
        return;
      } else{
        setErrorMessage('')
        setError(false)
      }

      let finalEmail = email;
      if (!email.endsWith('@senaisp.edu.br')) {
        finalEmail = email + '@senaisp.edu.br';
      }

      const sucess = await AddEmployee(nif, name, finalEmail, nivel_acesso);
      
        if(sucess) {
          setFinishForm(true)
          setTimeout(() =>{
            setIsOpenModal(false)
          },[3000])
          Notification("sucess", "Funcionário criado com sucesso")
        } else {
          setTimeout(() =>{
            setIsOpenModal(true)
          },[3000])
          Notification("error", "Funcionário não foi criado")
        }

    }
    
  return (
    <>

        <form className='flex flex-col gap-4 mt-4 space-y-32' onSubmit={handleSubmit}> 
          <div className='flex flex-col gap-2'>
            <InputText error={error} disabled={finishForm} value={name} onChange={handleNameChange} name="Nome completo:" id="nome" text="nome" />

            <div className='relative'>
              <span className={`absolute inset-y-0 right-4 top-[33px] flex items-center text-ct3 md:text-fun2 text text-roxo-50 p-1 md:p-2 bg-gradient-to-r from-[#BD3FD1] to-[#9332AE] rounded-lg w-auto h-8`}>@senaisp.edu.br</span>
              <InputText disabled={finishForm} error={error} value={email} errorValidacao={email.error} onChange={handleEmailChange}  name="Email:" id="email" text="email" placeholder="ex:marlene" />
            </div>

            <InputText error={error} disabled={finishForm} value={nif} onChange={handleNifChange} name="NIF:" id="nif" text="nif" placeholder=" NN.NNN.NNN/NNNN-NN" />



            <div className='flex flex-col gap-2'>
              <InputRadioInformation
                      id="opcao1"
                      value="opcao1"
                      checked={nivel_acesso === 3}
                      onChange={() => setNivel_acesso(3)}
                      placeholder="Administrador"
                      description="bla bla bla"
                      disabled={finishForm}
              />

            <InputRadioInformation
                      id="opcao2"
                      value="opcao2"
                      checked={nivel_acesso === 2}
                      onChange={() => setNivel_acesso(2)}
                      placeholder="Diretor"
                      description="Descrição da opção 2"
                      disabled={finishForm}
              />

              <InputRadioInformation
                      id="opcao3"
                      value="opcao3"
                      checked={nivel_acesso === 1}
                      onChange={() => setNivel_acesso(1)}
                      placeholder="Associado"
                      description="Descrição da opção 3"
                      disabled={finishForm}
              />
            </div>
            {errorMessage && <p className="text-vermelho-300 text-fun2">{errorMessage}</p>} 
          </div>
           
          
           
          <div className='flex align-bottom justify-end'>
            <PinkButton disabled={finishForm} text="confirmar" size="big" />
          </div>
            
        </form>
    </>
  )
}
