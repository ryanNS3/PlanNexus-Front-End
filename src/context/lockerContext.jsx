import React, { useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";

export const LockerContext = React.createContext();
const BASE_URL = import.meta.env.VITE_API_URL;

export function LockerProvider({ children }) {
    const {token, user} = useContext(UserGlobal)
    const [dataLocker, setDataLocker] = useState([]);
    const { dados, requisicao } = useAxios();

    async function GetLocker() {
        const reqLocker = await requisicao(`${BASE_URL}/armario/todos`, null, "GET", {
            authorization: `bearer ${token}`,
            nif: user,
        })
        setDataLocker(reqLocker.json.response)
    }

    async function UpdateLocker(dataLocker) {
        
        const reqStatus = await requisicao(`${BASE_URL}/armario/atualizar`, {
                "numeroArmario": dataLocker.numero,
                "idAluno": dataLocker.id_aluno,
                "statusArmario": dataLocker.status
        }, "PATCH", {
            authorization: `bearer ${token}`,
            nif: user,
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