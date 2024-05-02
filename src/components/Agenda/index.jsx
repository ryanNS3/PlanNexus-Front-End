import React from "react";

export function Agenda() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const steps = ["S", "T", "Q", "Q", "S", "S", "D"];

  return (
    <section className="px-6 py-9 shadow-[0_4px_8px_0px_rgba(227,227,227)] rounded-lg">
      <h2 className="text-sub2 mb-7">Agenda</h2>

      <nav className="mb-9">
        <ul className="flex justify-between gap-6">
          {steps?.map((step, index) => (
            <React.Fragment>
              <li
                key={index}
                className="flex flex-col items-center cursor-pointer gap-2"
                // onClick={() =>
                //   name && cpf && email && phone ? setStep(index + 1) : null
                // }
              >
                <div
                  className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center ${
                    currentStep == index + 1
                      ? "bg-rosa-300 text-rosa-50"
                      : "bg-[#D9D9D9] text-cinza-700"
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`block ${
                    currentStep == index + 1 ? "text-preto" : "text-cinza-500"
                  } text-fun2 max-w-28 text-center`}
                >
                  {step}
                </span>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* <nav>
        <ul className="flex gap-6">
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-rosa-300 text-fun2 text-branco">
            S
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            T
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            Q
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            Q
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            S
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            S
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            D
          </li>
        </ul>
      </nav> */}
    </section>
  );
}

function Step({ currentStep, step, children }) {
  const show = currentStep === step;

  return show ? <>{children}</> : null;
}
