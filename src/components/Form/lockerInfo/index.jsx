
import { PinkButton } from "../../Buttons/pinkButton";
import { SecundaryButton } from "../../Buttons/secundaryButton";
import { Volunteer } from "../../../assets/Volunteer";
import { Lock } from "../../../assets/Lock";

export function LockerInfo({ nome, numero, status }) {

    

    return (
        <form action="submit" className="flex flex-col w-full h-full justify-between">
            <div>
                <div className={`relative max-w-24 ${status == "ocupado" ? "bg-[#A0E29E]" : "bg-cinza-100"
                    } h-24 flex items-center justify-center rounded-lg`}>
                    <p className="text-h5">{numero}</p>
                </div>
                <h1 className="text-h4 mt-4">Armário {numero}</h1>
                <h3 className="text-sub1 mt-8">Disponibilidade:</h3>
                <p className="mt-4">{nome == null ? 'Indisponível' : 'Disponível'}</p>
            </div>

            <div className="flex gap-2 items-end justify-between gap-x-4">
                <SecundaryButton text={'Trancar Armário'} icon={<Lock />} size={'big'} />
                <PinkButton text={'Doar Armário'} icon={<Volunteer />} size={'big'}/>
            </div>
        </form>
    )
}

// key={`${id}`} numero={`${numero}`} status={`${status}`}