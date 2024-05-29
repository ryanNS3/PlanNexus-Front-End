import { SecundaryButton } from "../Buttons/secundaryButton";
import { Lock } from "../../assets/Lock";
import { Door } from "../../assets/Door";
import { Volunteer } from "../../assets/Volunteer";
import { LockerInfo } from "../../components/Form/lockerInfo";
import { ModalOptions } from "../Modal";
import React from "react";
import { LockerVolunteer } from "../../components/Form/lockerVolunteer";
import { LockerContext } from "../../context/lockerContext";

export function Options({ nome, numero, status, idStudent }) {

  const { dataLocker, UpdateLocker } = React.useContext(LockerContext);

   const handleLock = async () => {
    const isBusyCloset = status == "desocupado" ? "trancado" : "desocupado"
    try {
      // Atualizar o status do armário para "Trancado" ou "Desocupado"
      const newStatusLocker = {
        numero : numero,
        id_aluno : idStudent,
        nome_aluno: nome,
        status: isBusyCloset
         
      }
    
       const req  = await UpdateLocker(newStatusLocker);
       console.log(req)
      
    } catch (error) {
      console.error("Erro ao trancar o armário:", error);
    }
  };

  return (
    <>
      <div className="absolute flex flex-col z-30 gap-y-1 ">
        <SecundaryButton text={"Trancar"} icon={<Lock />} onClick={handleLock}/>

        <div>
          <ModalOptions Button={<SecundaryButton text={"Doar"} icon={<Volunteer />} />}>
            <LockerVolunteer />
          </ModalOptions>
        </div>

        <div>
          <ModalOptions Button={<SecundaryButton text={"Informações"} icon={<Door />} />}>
            <LockerInfo nome={nome} numero={numero} status={status} />
          </ModalOptions>
        </div>
      </div>
    </>
  );
}