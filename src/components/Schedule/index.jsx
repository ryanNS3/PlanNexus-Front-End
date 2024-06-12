import React, { useContext, useEffect } from "react";
import { ReservaContext } from "../../context/reservaContext";

export function Schedule() {
  const { GetAllReservas, reservas } = useContext(ReservaContext);

  useEffect(() => {
    GetAllReservas();
  }, [GetAllReservas]);

  const steps = ["S", "T", "Q", "Q", "S", "S", "D"];
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <section
      className="px-6 py-9 shadow-[0_4px_8px_0px_rgba(227,227,227)] border border-cinza-100 rounded-lg max-h-[1168px] overflow-auto max-[1024px]:col-span-full"
      style={{ scrollbarWidth: "none" }}
    >
      <h2 className="text-sub2 mb-7">Agenda</h2>

      <nav>
        <ul className="flex gap-6 justify-between">
          {steps?.map((step, index) => (
            <React.Fragment key={index}>
              <li
                key={index}
                className="flex flex-col items-center cursor-pointer gap-2"
                onClick={() => setCurrentStep(index + 1)}
              >
                <div
                  className={`flex rounded-full w-11 h-11 text-fun2 items-center justify-center hover:bg-rosa-300 hover:text-branco ${
                    currentStep === index + 1
                      ? "bg-rosa-300 text-branco"
                      : "bg-[#D9D9D9] text-cinza-700"
                  }`}
                >
                  {step}
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col mt-9 gap-11 overflow-auto pt-3">
        {reservas.length > 0 ? (
          reservas.map((reserva, index) => (
            <Step currentStep={currentStep} step={index + 1} key={reserva.id_reserva}>
              <Task
                text={`Reserva de ${reserva.nome}`}
                time={new Date(reserva.retirada).toLocaleTimeString()}
                name={reserva.nome}
                picture="https://via.placeholder.com/150"
              />
            </Step>
          ))
        ) : (
          <p>Carregando reservas...</p>
        )}
      </div>
    </section>
  );
}

function Task({ text, time, name, picture }) {
  return (
    <div className="flex relative items-center gap-2">
      <span className="block px-2 py-3 bg-rosa-400 h-fit rounded-lg text-branco text-fun2">
        {time}
      </span>

      <div className="flex justify-between gap-3 items-center rounded-lg border-2 border-cinza-200 px-4 py-6 w-full">
        <p className="text-fun2">{text.length <= 25 ? text : text.slice(0, 25) + "..."}</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="py-1 px-3 bg-[#71d16e] hover:opacity-85 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path
                d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                fill="#fff"
              />
            </svg>
          </button>

          <button
            type="button"
            className="px-3 py-1 bg-cinza-500 hover:opacity-85 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div className="absolute flex gap-1 bg-branco top-[-12px] px-2">
          <img className=" rounded-full h-6 w-6" src={picture} alt="" />
          <span className="text-ct3">{name}</span>
        </div>
      </div>
    </div>
  );
}

function Step({ currentStep, step, children }) {
  const show = currentStep === step;
  return show ? <>{children}</> : null;
}
