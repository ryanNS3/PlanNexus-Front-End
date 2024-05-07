import { Locker } from "../../AllLocker";
import { AllLocker } from "../../AllLocker";
import { PinkButton } from "../../Buttons/pinkButton";
import { SecundaryButton } from "../../Buttons/secundaryButton";
import { Volunteer } from "../../../assets/Volunteer";
import { Lock } from "../../../assets/Lock";

export function LockerInfo({ numero }) {

    return (
        <form action="submit" className="flex flex-col w-full h-full justify-between">
            <div>
                <div className={'flex h-24 max-w-24 rounded-lg bg-cinza-400 '}>
                    <p>{numero}</p>
                </div>
                <h1 className="text-h4 mt-4">Armário {numero}</h1>
                <h3 className="text-sub1 mt-8">Disponibilidade:</h3>
                <p className="mt-4">Disponível</p>
            </div>

            <div className="flex items-end justify-end gap-x-4">
                <SecundaryButton text={'Trancar Armário'} icon={<Lock />} />
                <PinkButton text={'Doar Armário'} icon={<Volunteer />} />
            </div>
        </form>
    )
}

// key={`${id}`} numero={`${numero}`} status={`${status}`}