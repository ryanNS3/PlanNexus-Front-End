import { PinkButton } from "../../Buttons/pinkButton";
import { SecundaryButton } from "../../Buttons/secundaryButton";
import { Volunteer } from "../../../assets/Volunteer";
import { Lock, LockBlack } from "../../../assets/Lock";
import { LockerContext } from "../../../context/lockerContext";
import { StudentName } from "../../StudentName";

export function LockerInfo({ nome, numero, status }) {
  const isVacation = status == "desocupado" ? "Disponível" : "Indisponível";
  const unlocker = status == "desocupado" ? "hidden" : "";

  return (
    <form
      className="flex flex-col w-full h-full justify-between"
    >
      <div>
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

        <h1 className="text-h4 mt-4">Armário {numero}</h1>
        <h3 className="text-sub1 mt-8">Disponibilidade:</h3>
        <p className="mt-4">{`${isVacation}`}</p>

        <div className={`flex ${status == "ocupado" ? 'flex': 'none' }`}>
          <p>Utilizador:</p>
          <StudentName nome={nome}/>
        </div>

      </div>

      {/* Botões */}

      <div className="flex gap-2 items-end justify-between gap-x-4">
        <SecundaryButton
          text={"Trancar Armário"}
          icon={<Lock />}
          size={"big"}
        />
        <PinkButton text={"Doar Armário"} icon={<Volunteer />} size={"big"} />
      </div>
    </form>
  );
}
