import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
 
export const EmployeeContext = React.createContext();
 
export function EmployeeProvider({ children }) {
  const { requisicao } = useAxios();
  const { token, user } = useContext(UserGlobal);
  const [EmployeeData, setEmployeeData] = React.useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL;
 
  const GetAllEmployees = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/todos`,
        null,
        `GET`,
        {
          authorization: `bearer ${localStorage.getItem('token')}`,
          nif: localStorage.getItem('user'),
        }
      );
      console.log(res)
      if (res && res.res.status === 200) {
        setEmployeeData(res.json.response);
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
    }
  }, []);
 
  const GetEmployee = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/${user}`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      console.log(res)
      if (res && res.res.status === 200) {
        setEmployeeData(res.json.response);
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
    }
  }, []);
 
  const AddEmployee = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/`,
        null,
        `POST`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        setEmployeeData(res.json.response);
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
    }
  }, []);
 
  const EditEmployee = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/${user}`,
        null,
        `PATCH`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        setEmployeeData(res.json.response);
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
    }
  }, []);
 
  const DeleteEmployee = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/todos`,
        null,
        `DELETE`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        setEmployeeData(res.json.response);
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
    }
  }, []);
 
  return (
    <EmployeeContext.Provider
      value={{ GetAllEmployees, GetEmployee, DeleteEmployee, AddEmployee, EditEmployee, EmployeeData }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
