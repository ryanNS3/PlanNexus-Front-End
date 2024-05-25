import React, { useState } from "react";
import useAxios from "../hooks/useAxios";

export const LockerContext = React.createContext();
const BASE_URL = import.meta.env.VITE_API_URL;

export function LockerProvider({ children }) {

    const [dataLocker, setDataLocker] = useState([]);
    const { dados, requisicao } = useAxios();

    async function GetLocker() {
        const reqLocker = await requisicao(`${BASE_URL}/armario/todos`, null, "GET", {
            authorization: `bearer ${localStorage.getItem('token')}`,
            nif: localStorage.getItem('user'),
        })
        setDataLocker(reqLocker.json.response)
        console.log(dataLocker)
    }

    async function UpdateLocker(dataLocker) {
        
        const reqStatus = await requisicao(`${BASE_URL}/armario/atualizar`, {
                "numeroArmario": dataLocker.numero,
                "idAluno": dataLocker.id_aluno,
                "statusArmario": dataLocker.status
        }, "PATCH", {
            authorization: `bearer ${localStorage.getItem('token')}`,
            nif: localStorage.getItem('user'),
        })
        return reqStatus , console.log(reqStatus,"aqui poh");
        
    }

    return (
        // desserializa os valores que passo para ele
        <LockerContext.Provider value={{ dados, dataLocker, GetLocker, UpdateLocker }}>
            {children}
        </LockerContext.Provider>
    )
}