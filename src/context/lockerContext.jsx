import React, { useState } from "react";
import useAxios from "../hooks/useAxios";

export const LockerContext = React.createContext();
const BASE_URL = import.meta.env.VITE_API_URL;

export function LockerProvider({ children }) {

    const [dataLocker, setDataLocker] = useState([]);
    const { dados, requisicao } = useAxios();

    console.log(BASE_URL)

    async function GetLocker() {
        const reqLocker = await requisicao(`${BASE_URL}/armario/todos`, null, "GET", {
            authorization: `bearer ${localStorage.getItem('token')}`,
            nif: localStorage.getItem('user'),
        })
        setDataLocker(reqLocker.json.response)
        console.log(dataLocker)
        console.log(dados)
    }

    return (
        // deserializa os valores que passo para ele
        <LockerContext.Provider value={{ dados,dataLocker,  GetLocker }}>
            {children}
        </LockerContext.Provider>
    )
}