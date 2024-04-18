import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";

const EmployeeContext = React.createContext();

export function EmployeeProvider({ children }) {
  const { requisicao } = useAxios();
  const {token, user} = useContext(UserGlobal)
  const [EmployeeData, setEmployeeData] = React.useState(null);

  

  const GetEmployee = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/todos`,
        null,
        `GET`,
        {
          token: token,
          nif: user,
        }
      );
      setEmployeeData(dados);
    } catch (err) {
        console.log(err);
    }
},[]);

const DeleteEmployee = React.useCallback(async() =>{
    try{
        const res = await requisicao(
          `${BASE_URL}/funcionario/todos`,
          null,
          `DELETE`,
          {
            token: token,
            nif: user,
          }
        );
        setEmployeeData(dados);  
    }

    catch(err){
        console.log(err)
    }

  },[]);

  return (
    <EmployeeContext.Provider value={{ GetEmployee, DeleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}
