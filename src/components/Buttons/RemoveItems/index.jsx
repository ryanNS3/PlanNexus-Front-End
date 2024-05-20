import { DeleteIcon } from "../../../assets/deleteIcon";


export function RemoveItems({onRemove}) {
    return(
        <button className="p-2 rounded-full bg-preto" onClick={onRemove}>
            <DeleteIcon/>
        </button>
    )
}