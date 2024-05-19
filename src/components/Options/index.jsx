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

  const { dataLocker, AtualizaLocker } = React.useContext(LockerContext);

   const handleLock = async ({target}) => {
    const isBusyCloset = status == "desocupado" ? "ocupado" : "desocupado"
    try {
      // Atualizar o status do armário para "Trancado"
      const newStatusLocker = {
        numero : numero,
        id_aluno : idStudent,
        status: isBusyCloset
         
      }
      console.log(newStatusLocker)

       const req  = await AtualizaLocker({
        newStatusLocker
       });
       console.log(req)
      
    } catch (error) {
      console.error("Erro ao trancar o armário:", error);
    }
  };

  return (
    <>
      <div className="absolute flex flex-col z-10 gap-y-1 ">
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