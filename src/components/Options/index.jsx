import { SecundaryButton } from "../Buttons/secundaryButton";
import { Lock } from "../../assets/Lock";
import { Door } from "../../assets/Door";
import { Volunteer } from "../../assets/Volunteer";
import { LockerInfo } from "../../components/Form/lockerInfo";
import { ModalOptions } from "../Modal";
import React, { useRef, useEffect, useContext } from "react";
import { LockerVolunteer } from "../../components/Form/lockerVolunteer";
import { LockerContext } from "../../context/lockerContext";

export function Options({ nome, numero, status, idStudent }) {
  const [alignment, setAlignment] = React.useState("");
  const { mutatePatchLock} = useContext(LockerContext);
  const menuRefLocker = useRef();

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

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screen = screenWidth * 0.8;
    const right = menuRefLocker.current.getBoundingClientRect().right;
    if (right >= screen) {
      setAlignment("items-end");
    }
  }, [menuRefLocker]);

  return (
    <div className={`absolute flex flex-col ${alignment} z-30 gap-y-1`} ref={menuRefLocker}>
      <SecundaryButton text={"Trancar"} icon={<Lock />} action={handleLock} />

      <ModalOptions Button={<SecundaryButton text={"Doar"} icon={<Volunteer />} />}>
        <LockerVolunteer />
      </ModalOptions>

      <ModalOptions Button={<SecundaryButton text={"Informações"} icon={<Door />} />}>
        <LockerInfo nome={nome} numero={numero} status={status} />
      </ModalOptions>
    </div>
  );
}




// import { SecundaryButton } from "../Buttons/secundaryButton";
// import { Lock } from "../../assets/Lock";
// import { Door } from "../../assets/Door";
// import { Volunteer } from "../../assets/Volunteer";
// import { LockerInfo } from "../../components/Form/lockerInfo";
// import { ModalOptions } from "../Modal";
// import React, { useRef } from "react";
// import { LockerVolunteer } from "../../components/Form/lockerVolunteer";
// import { LockerContext } from "../../context/lockerContext";
// import { useEffect } from "react";

// export function Options({ nome, numero, status, idStudent }) {
//   const [alight, setAlight] = React.useState("");

//   const { UpdateLocker } = React.useContext(LockerContext);

//   const handleLock = async () => {
//     const isBusyCloset = status == "desocupado" ? "trancado" : "desocupado";
//     try {
//       // Atualizar o status do armário para "Trancado" ou "Desocupado"
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

//   let menuRefLocker = useRef();

//   const screenWidth = window.innerWidth; // Obtém a largura da tela

//   // Calcula 10% da largura da tela
//   let screen = screenWidth * 0.8;

//   useEffect(() => {
//     const screenWidth = window.innerWidth; // Obtém a largura da tela
//     let screen = screenWidth * 0.8; // Calcula 10% da largura da tela
//     console.log(screen);
//     let right = menuRefLocker.current.getBoundingClientRect().right;

//     if (right >= screen) {
//       console.log("offset right", right, numero);
//       setAlight("items-end");
//     }
//   }, [menuRefLocker]);

//   return (
//     <>
//       <div
//         className={`absolute flex flex-col ${alight} z-30 gap-y-1`}
//         ref={menuRefLocker}
//       >
//         <SecundaryButton text={"Trancar"} icon={<Lock />} action={handleLock} />

//         <div>
//           <ModalOptions
//             Button={<SecundaryButton text={"Doar"} icon={<Volunteer />} />}
//           >
//             <LockerVolunteer />
//           </ModalOptions>
//         </div>

//         <div>
//           <ModalOptions
//             Button={<SecundaryButton text={"Informações"} icon={<Door />} />}
//           >
//             <LockerInfo nome={nome} numero={numero} status={status} />
//           </ModalOptions>
//         </div>
//       </div>
//     </>
//   );
// }
