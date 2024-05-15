import { PinkButton } from "../../Buttons/pinkButton"
import { GhostButton } from "../../Buttons/ghostButton"
import { TextArea } from "../../Inputs/TextArea"
import { Label } from "../../Inputs/Label"

export function LockerForm() {
    return (

        < form action="submit" className="flex flex-col w-full h-full justify-between" >

            <div className="flex flex-col">
                <h1 className="text-h4">ENVIAR AVISO</h1>
                <div>
                    <Label text={'Motivo:'} />
                    <TextArea />
                </div>
                <div>
                <Label text={'Data:'} />
                {/* <InputCalendar/> */}
                </div>
            </div>

            <div className="flex flex-wrap items-end justify-end gap-4">
                <GhostButton text={'Cancelar'} />
                <PinkButton text={'Continuar'} />
            </div>

        </form >

    )
}

// className="h-44 border-2 rounded border-cinza-50 border-lg pl-5 pb-32 hover:border-rosa-300"
//<label className="text-fun2 mt-12">Motivo:</label>
// <label className="text-fun2 mt-6"></label>
// <input type="date" className="border-2 rounded border-cinza-50 hover:border-rosa-300 border-lg uppercase" /> */}