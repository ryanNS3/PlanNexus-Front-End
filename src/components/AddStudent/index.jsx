import React from "react";
import { PinkButton } from "../Buttons/pinkButton";

export function AddStudent() {
  const steps = [
    "Informações pessoais",
    "Informações de curso",
    "Pré-visualização",
  ];

  const [currentStep, setCurrentStep] = React.useState(1)
  function setStep(step) {
    setCurrentStep(step)
  }

  return (
    <>
      <div>
        <h4 className="text-h4 uppercase">Adicionar Aluno</h4>
        <nav>
          <ul className="flex justify-between">
            {steps?.map((step, index) => (
              <li key={index} className="flex flex-col items-center cursor-pointer" onClick={() => setStep(index + 1)}>
                <div className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${currentStep == index + 1 ? "bg-rosa-300 text-rosa-50" : "bg-[#D9D9D9] text-cinza-700"}`}>{index + 1}</div>
                <span className={`block ${currentStep == index + 1 ? "text-preto" : "text-cinza-500"} text-fun2 max-w-28 text-center`}>{step}</span>
              </li>
            ))}
          </ul>
        </nav>
        <PinkButton text="Voltar" />
        <PinkButton text="Continuar" />
      </div>
    </>
  );
}

{/* <div className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${currentStep == index + 1 ? "bg-rosa-300 text-rosa-50" : "bg-[#D9D9D9] text-cinza-700"} after:content-[''] after:inline-block after:h-[2px] after:w-full after:bg-preto`}>{index + 1}</div> */}
