import { Lockers } from './../AllLocker'
import { SquareCheckBox } from './../Inputs/CheckBox'

export function SelectLocker() {
    return (
        <>
            <div className="flex flex-col flex-wrap">
                <h1>Selecione o armário</h1>
                <div className='flex flex-col h-3/5 bg-branco px-6 rounded-lg'>
                    <Lockers />
                </div>
            </div>
        </>
    )
}