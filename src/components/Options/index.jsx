import { SecundaryButton } from "../Buttons/secundaryButton";
import { Lock } from "../../assets/Lock";
import { Door } from "../../assets/Door";
import { Volunteer } from "../../assets/Volunteer";
import { LockerInfo } from "../../components/Form/lockerInfo";
import { ModalOptions } from "../Modal";
import React, { useContext, useRef } from "react";
import { LockerVolunteer } from "../../components/Form/lockerVolunteer";
import { LockerContext } from "../../context/lockerContext";
import { useEffect } from "react";

export function Options({ nome, numero, status, idStudent }) {
  const [alightment, setAlightment] = React.useState("");
  const { mutatePatchLock } = useContext(LockerContext);
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
  };
  
  useEffect(() => {
    const screenWidth = window.innerWidth; // Obtém a largura da tela
    // Calcula 10% da largura da tela
    let screen = screenWidth * 0.8;
    // Retorna um objeto com a medida direita do armário em relação a
    let right = menuRefLocker.current.getBoundingClientRect().right;

    if (right >= screen) {
      setAlightment("items-end");
    }
  }, [menuRefLocker]);

  return (
    <>
      <div
        className={`absolute flex flex-col ${alightment} z-30 gap-y-1`}
        ref={menuRefLocker}
      >
        <SecundaryButton text={"Trancar"} icon={<Lock />} action={handleLock} />

        <div>
          <ModalOptions
            Button={<SecundaryButton text={"Doar"} icon={<Volunteer />} />}
          >
            <LockerVolunteer />
          </ModalOptions>
        </div>

        <div>
          <ModalOptions
            Button={<SecundaryButton text={"Informações"} icon={<Door />} />}
          >
            <LockerInfo nome={nome} numero={numero} status={status} />
          </ModalOptions>
        </div>
      </div>
    </>
  );
}
