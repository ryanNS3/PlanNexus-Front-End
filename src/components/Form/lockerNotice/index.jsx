import { PinkButton } from "../../Buttons/pinkButton"
import { GhostButton } from "../../Buttons/ghostButton"
import { TextArea } from "../../Inputs/TextArea"
import { Label } from "../../Inputs/Label"

export function LockerForm() {


    return (

        < form className="flex flex-col w-full h-full justify-between" >

            <div className="flex flex-col max-h-[70%] overflow-y-scroll">
                <h1 className="text-h4">ENVIAR AVISO</h1>
                <div className="mt-3">
                    <Label text={'Motivo:'} />
                    <TextArea />
                </div>
                <div className="mt-3">
                <Label text={'Data:'} />
                {/* <InputCalendar/> */}
                </div>
            </div>

            <div className="flex flex-wrap items-end justify-end gap-4">
                <GhostButton text={'Cancelar'} action={console.log('Cancelar')}/>
                <PinkButton text={'Continuar'} />
            </div>

        </form >

    )
}