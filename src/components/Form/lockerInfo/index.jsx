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
  const { UpdateLocker } = React.useContext(LockerContext);

  const handleLock = async () => {
    const isBusyCloset = status == "desocupado" ? "trancado" : "desocupado";
    try {
      // Atualizar o status do armário para "Trancado" ou "Desocupado do armário"
      const newStatusLocker = {
        numero: numero,
        id_aluno: idStudent,
        nome_aluno: nome,
        status: isBusyCloset,
      };

      const req = await UpdateLocker(newStatusLocker);
      console.log(req);
    } catch (error) {
      console.error("Erro ao trancar o armário:", error);
    }
  };

  const isVacation = status == "desocupado" ? "Disponível" : "Indisponível";
  const unlocker = status == "desocupado" ? "hidden" : "";

  return (
    <div className="flex flex-col w-full h-full justify-between">
      <div
        className={`relative max-w-24 ${
          status == "desocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"
        } h-24 flex items-center justify-center rounded-lg`}
      >
        <div className={`absolute top-1 right-1  ${unlocker}`}>
          <LockBlack />
        </div>
        <p className="text-h5">{numero}</p>
      </div>

      <h1 className="text-h5 mt-4">Armário {numero}</h1>
      <h3 className="text-sub1 sm:mt-3 mt-8">Disponibilidade:</h3>
      <p className="mt-4">{`${isVacation}`}</p>

      
      <div className={`flex flex-col ${status == "ocupado" ? "flex" : "hidden"}`}>
        <p>Utilizador</p>
        <StudentName nome={nome} />
      </div> 

      {/* Botâo para trancar armário */}

      <div className="flex gap-2 items-end justify-between gap-x-4">
        <SecundaryButton
          text={"Trancar Armário"}
          icon={<Lock />}
          size={"big"}
          onClick={handleLock}
        />

        {/* Botão Doação */}
        <PinkButton
          text={"Doar Armário"}
          icon={<Volunteer />}
          size={"big"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
