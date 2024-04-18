import React, { useContext } from 'react'
import { PinkButton } from '../../Buttons/pinkButton'
import { InputText } from '../../Inputs/input-text/inputTextComp'

import { useInputValidate } from '../../../hooks/useInputValidate'

import { modalContext } from '../../../context/modalContext';
import { toastifyContext } from '../../../context/toastifyContext';


export const EmployeeForm = () => {
    const {setIsOpenModal} = useContext(modalContext)
    const {Notification} = React.useContext(toastifyContext)

    const [finishForm, setFinishForm] = React.useState(false)

    const nome = useInputValidate('nome');
  
    const email = useInputValidate('email');
    
    function handleSubmit(event){
      event.preventDefault()

      if (email.validate(email.value)){

        console.log(event.target.value)
        setFinishForm(true)
        setTimeout(() =>{
          setIsOpenModal(false)
        },[3000])
        Notification("sucess", "Funcionário criado com sucesso")
      }
      else{
        console.log(event.target.value)
        return null
      }
      
    }
    
  return (
    <>

        <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}> 
            <InputText disabled={finishForm} value={email.value} errorValidacao={email.error} onChange={email.onChange} onBlur={email.onBlur}  name="nome" id="nome" text="nome" />
            <PinkButton disabled={finishForm} text="confirmar" size="big"/>
        </form>
    </>
  )
}
