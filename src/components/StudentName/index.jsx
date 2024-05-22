import { LockerContext } from "../../context/lockerContext"


export function StudentName({name}){

    // const {dataLocker} = React.useContext(LockerContext)

    return(
        <div className="flex w-full border-cinza-100 rounded border-2 align-start py-3">
            <p className="text-ct3">{name}</p>
        </div>
    )
}