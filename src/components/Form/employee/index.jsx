import React from 'react'
import { PinkButton } from '../../Buttons/pinkButton'
import { InputText } from '../../Inputs/input-text/inputTextComp'

export const EmployeeForm = () => {
    
    function handleSubmit(){
        console.log("teste")
    }

  return (
    <>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}> 
            
            <InputText name="nome" id="nome" text="nome" />
            <InputText name="nif" id="nif" text="nif" />
           
            <PinkButton text="confirmar" size="big"/>
        </form>
    </>
  )
}
