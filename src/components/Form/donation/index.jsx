import React from "react";
import { InputText } from "../../Inputs/input-text/inputTextComp";
import { InputRadioInformation } from "../../Inputs/input-radio-information";
import { PinkButton } from "../../Buttons/pinkButton";


export function DonationForm(){
  const steps = [
    'Informações do aluno',
    'Produto para doação',
    'Contrato'
  ]

  const [name, setName] = React.useState(null)
  const [email, setEmail] = React.useState(null)
  const [cpf, setCpf] = React.useState(null)
  const [cellphone, setCellphone] = React.useState()

  const [currentStep, setCurrentStep] = React.useState(1)

  function setStep(step){
    setCurrentStep(step)
  }

  function Step({currentStep, step, children}) {
    const show = currentStep === step
  
    return show ? <>{children}</> : null
  }

  return(
    <>
      <div>
        <h4 className="text-h4 mb-11">DOAÇÃO</h4>

        <nav className="mb-9">
          <ul className="flex justify-between">
            {steps?.map((step, index) => (
              <React.Fragment key={index}>
                <li key={index} 
                onClick={() => name && email && cpf && cellphone ? setStep(index + 1) : null} 
                className="flex flex-col items-center cursor-pointer gap-2">

                  <div className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${
                      currentStep == index + 1
                        ? 'bg-rosa-300 text-rosa-50'
                        : 'bg-[#D9D9D9] text-cinza-700'
                    }`}>
                      {index + 1}
                  </div>
                  
                      <span className={`block ${
                      currentStep == index + 1 ? 'text-preto' : 'text-cinza-500'
                    } text-fun2 max-w-28 text-center`}>
                        {step}
                      </span>
                </li>

                {index != steps.length -1 ? (
                  <div className="w-screen h-[2px] bg-cinza-300 mt-[21px]"></div> 
                ) : null}
                </React.Fragment>
            ))}
          </ul>
        </nav>

                <form>
                  <Step currentStep={currentStep} step={1}>
                    <div className="flex flex-col gap-6">
                      <InputText id='name' type='text' name='Nome completo' placeholder='José da Silva' onChange={(e) => setName(e.target.value)} value={name ? name : ''} />

                      <InputText id='email' type='email' name='Email' placeholder='jose@gmail.com' onChange={(e) => setEmail(e.target.value)} value={email ? email : '' } />

                      <InputText id='cpf' type='text' name='CPF' placeholder='000.000.000-00' onChange={(e) => setCpf(e.target.value)} value={cpf ? cpf : ''} />

                      <InputText id='cellphone' type='text' name='telefone' placeholder='55 11 111111111' onChange={(e) => setCellphone(e.target.value)} value={cellphone ? cellphone : ''} />
                    </div>

                    <div>
                      <PinkButton text='Continuar' 
                      action={() => name && email && cpf && cellphone ? setCurrentStep(currentStep + 1) : null}
                      typeButton='button'>

                      </PinkButton>
                    </div>
                  </Step>

                  <Step currentStep={currentStep} step={2}>
                    <h4>Produto para doação</h4>
                  </Step>

                  <Step currentStep={currentStep} step={3}>

                  </Step>
                </form>
              

    </div>
    
    </>
  )
}

