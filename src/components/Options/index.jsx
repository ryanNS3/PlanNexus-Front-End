import { SecundaryButton } from "../Buttons/secundaryButton";
import { Lock } from "../../assets/Lock";
import { Door } from "../../assets/Door";
import { Volunteer } from "../../assets/Volunteer";

export function Options() {
    return (
        // <div className="grid cols-span-2">
            <div className="absolute flex flex-col z-50 gap-y-1">
                <SecundaryButton icon={<Lock/>} text={'Trancar'} />
                <SecundaryButton icon={<Volunteer/>} text={'Doar'} />
                <SecundaryButton icon={<Door/>}  text={'Informações'} />
            </div>
        // </div>
    )
}