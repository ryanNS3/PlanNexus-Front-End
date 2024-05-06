import { PinkButton } from "../../Buttons/pinkButton"
import { GhostButton } from "../../Buttons/ghostButton"

export function LockerForm() {
    return (

        < form action="submit" className="flex flex-col w-full h-full justify-between" >

            <div className="flex flex-col">
                <h1 className="text-h4">ENVIAR AVISO</h1>
                <label className="text-fun2 mt-12">Motivo:</label>
                <input type="text" className="h-44 border-2 rounded border-cinza-50 border-lg pl-5 pb-32 hover:border-rosa-300" placeholder="Descreva os detalhes " />

                <label className="text-fun2 mt-6">Data:</label>
                <input type="date" className="border-2 rounded border-cinza-50 hover:border-rosa-300 border-lg uppercase" />
            </div>

            <div className="flex items-end justify-end gap-x-4">
                <GhostButton text={'Cancelar'} />
                <PinkButton text={'Continuar'} />
            </div>
        </form >

    )
}