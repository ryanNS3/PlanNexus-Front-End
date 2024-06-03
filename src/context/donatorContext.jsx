import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
 
export const DonatorContext = React.createContext();
 
export function DonatorProvider({ children }) {
  const { requisicao } = useAxios();
  const [updatedDonator, setUpdatedDonator] = React.useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const {token, user} = useContext(UserGlobal)
  const [DonatorData, setDonatorData] = React.useState(null);

  
  const GetAllDonators = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/doacaoDinheiro/todos`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        setDonatorData(res.json.response);

    }
} catch (error) {
    console.log("Requisição falhou:", error);
    console.log('falhou')
    }
  }, []);

  return (
    <DonatorContext.Provider
      value={{ GetAllDonators }}
    >
      {children}
    </DonatorContext.Provider>
  );
}