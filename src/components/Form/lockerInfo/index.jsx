

import { PinkButton } from "../../Buttons/pinkButton";
import { SecundaryButton } from "../../Buttons/secundaryButton";
import { Volunteer } from "../../../assets/Volunteer";
import { Lock, LockBlack } from "../../../assets/Lock";
import { LockerContext } from "../../../context/lockerContext";
import { StudentName } from "../../StudentName";
import { ModalOptions } from "../../Modal";
import { LockerVolunteer } from "../lockerVolunteer";
import React from "react";

export function LockerInfo({ nome, numero, status, idStudent }) {
  const { mutatePatchLock } = React.useContext(LockerContext);
  const [ loading, setLoading] = React.useState(false)

  const handleLock = async (event) => {
    event.preventDefault();
  
    const newStatus = status === "desocupado" ? "trancado" : "desocupado";
    
    const newStatusLocker = {
      numero,
      id_aluno: idStudent,
      nome_aluno: nome,
      status: newStatus,
    };
    
    try {
      // Atualiza o estado do armário no servidor
      // const req = await UpdateLocker(newStatusLocker);
  
      // Depois que a atualização no servidor for concluída com sucesso, atualize o estado local
      mutatePatchLock.mutate(newStatusLocker);
    } catch (error) {
      console.error("Erro ao trancar o armário:", error);
    }
  }


  

  const isVacation = status === "desocupado" ? "Disponível" : "Indisponível";
  const unlockerClass = status === "desocupado" ? "hidden" : "";
  const pointColor = status === "desocupado" ? "bg-[#A0E29E]" : "bg-cinza-100";
  const studentState = status === "ocupado" ? "flex" : "hidden";

  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div>
        <div className={`relative max-w-24 ${pointColor} h-24 flex items-center justify-center rounded-lg`}>
          <div className={`absolute top-1 right-1 ${unlockerClass}`}>
            <LockBlack />
          </div>
          <p className="text-h5">{numero}</p>
        </div>

        <h1 className="text-h5 mt-4">Armário {numero}</h1>
        <h3 className="text-sub1 sm:mt-3 mt-8">Disponibilidade:</h3>

        <div className="flex align-center h-fit gap-2">
          <div className={`flex align-center self-center ${pointColor} w-2 h-2 rounded`}></div>
          <p className="text-ct2">{isVacation}</p>
        </div>

        <div className={`flex flex-col mt-6 gap-y-4 ${studentState}`}>
          <p className="text-sub1">Utilizador</p>
          <StudentName nome={nome} />
        </div>
      </div>

      <div className="flex gap-2 justify-between gap-x-4">
        <SecundaryButton
          text={"Trancar Armário"}
          icon={<Lock />}
          size={"big"}
          onClick={handleLock}
        />

        <ModalOptions Button={<PinkButton text={"Doar Armário"} icon={<Volunteer />} />}>
          <LockerVolunteer />
        </ModalOptions>
      </div>
    </div>
  );
}










// import { PinkButton } from "../../Buttons/pinkButton";
// import { SecundaryButton } from "../../Buttons/secundaryButton";
// import { Volunteer } from "../../../assets/Volunteer";
// import { Lock, LockBlack } from "../../../assets/Lock";
// import { LockerContext } from "../../../context/lockerContext";
// import { StudentName } from "../../StudentName";
// import { ModalOptions } from "../../Modal";
// import { LockerVolunteer } from "../lockerVolunteer";
// import React from "react";

// export function LockerInfo({ nome, numero, status, idStudent }) {

//   const { UpdateLocker } = React.useContext(LockerContext);

//   const handleLock = async () => {
//     const isBusyCloset = status == "desocupado" ? "trancado" : "desocupado";
//     try {
//       // Atualizar o status do armário para "Trancado" ou "Desocupado do armário"
//       const newStatusLocker = {
//         numero: numero,
//         id_aluno: idStudent,
//         nome_aluno: nome,
//         status: isBusyCloset,
//       };

//       const req = await UpdateLocker(newStatusLocker);
//       console.log(req);
//     } catch (error) {
//       console.error("Erro ao trancar o armário:", error);
//     }
//   };

//   // Status de uso
//   const isVacation = status == "desocupado" ? "Disponível" : "Indisponível";
//   // Icone de cadeado
//   const unlocker = status == "desocupado" ? "hidden" : "";
//   // Cor do ponto
//   const point = status == "desocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"
//   // Controla o estado de existência do component StudentName
//   const state = status === "ocupado" ? "flex" : "hidden"


//   return (
//     <div className="flex flex-col w-full h-full justify-between">
//       <div>
//         <div
//           className={`relative max-w-24 ${status == "desocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"
//             } h-24 flex items-center justify-center rounded-lg`}
//         >
//           <div className={`absolute top-1 right-1 ${unlocker}`}>
//             <LockBlack />
//           </div>
//           <p className="text-h5">{numero}</p>
//         </div>

//         <h1 className="text-h5 mt-4">Armário {numero}</h1>
//         <h3 className="text-sub1 sm:mt-3 mt-8">Disponibilidade:</h3>

//         <div className="flex align-center h-fit gap-2">
//           <div className={`flex align-center self-center ${point} w-2 h-2 rounded`}></div>
//           <p className="text-ct2">{`${isVacation}`}</p>
//         </div>

//         <div className={`flex flex-col mt-6 gap-y-4 ${state}`}>
//           <p className="text-sub1">Utilizador</p>
//           <StudentName nome={nome} />
//         </div>
//       </div>



//       {/* Botâo para trancar armário */}

//       <div className="flex gap-2 justify-between gap-x-4">
//         <SecundaryButton
//           text={"Trancar Armário"}
//           icon={<Lock />}
//           size={"big"}
//           onClick={handleLock}
//         />

//         {/* Botão Doação */}
//         <ModalOptions Button={<PinkButton text={"Doar Armário"} icon={<Volunteer />} />}>
//           <LockerVolunteer />
//         </ModalOptions>
//       </div>
//     </div>
//   );
// }
