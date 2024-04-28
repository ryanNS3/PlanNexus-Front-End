import React, { useState } from "react";
import useAxios from "../hooks/useAxios";

export const LockerContext = React.createContext();
const BASE_URL = import.meta.env.VITE_API_URL;

export function LockerProvider({children}){
    
    const [dataLocker, setDado] = useState(['Paulo',23,'Henrique']);
    const {dado, requisicao} = useAxios();
    
    console.log(BASE_URL)
    async function GetLocker(){
        const reqLocker = await requisicao(`${BASE_URL}/armario/todos`, null)
        console.log(reqLocker)

    }



    return(
        // deserializa os valores que passo para ele
        <LockerContext.Provider value={{dataLocker}}>  
            {children}
        </LockerContext.Provider>
    )
}