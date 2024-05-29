import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
 
export const EmployeeContext = React.createContext();
 
export function EmployeeProvider({ children }) {
  const { requisicao } = useAxios();

  const [EmployeeData, setEmployeeData] = React.useState(null);
  const [updatedEmployee, setUpdatedEmployee] = React.useState(null);
  const queryClient = useQueryClient()
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
 
  const FetchAllEmploye = React.useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/todos`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );

      if (res && res.res.status === 200) {
        return res;
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
      return false;
    }
  }, []);


  function GetAllEmployees() {
    const AllEmployees = useQuery({ queryKey : ['AllEmployees'], queryFn : FetchAllEmploye});
    const resAllEmployees = AllEmployees.data
    const resProductLoading = AllEmployees.isLoading
    const resProductError = AllEmployees.isError
    return { resAllEmployees, resProductLoading, resProductError };
  }
 
  const GetEmployee = React.useCallback(async (Id) => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/unico/${Id}`,
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
        return true;
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
      return false;
    }
  }, []);
 
  const AddEmployee = React.useCallback(async (NIF, nome, email, nivel_acesso) => {
    try {

      const res = await requisicao(
        `${BASE_URL}/funcionario/`,
        {NIF, nome, email, nivel_acesso},
        `POST`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 201) {
        return true;;
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
      return false;
    }
  }, []);

  const MutateAddNewEmployee = useMutation({
    mutationFn: AddEmployee,
    isSucces: () => {
      queryClient.invalidateQueries(['AllEmployees'])
    }
  });
 
const EditEmployee = React.useCallback(async (editedData) => {
    try {
      console.log('Dados mandados:', editedData)
      const res = await requisicao(
        `${BASE_URL}/funcionario/atualizar`,
        editedData,
        `PATCH`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        setUpdatedEmployee(res.json.response);
        if (updatedEmployee) {
          setEmployeeData((prevData) =>
            prevData.map((emp) =>
              emp.id_funcionario === updatedEmployee.id_funcionario ? updatedEmployee : emp
            )
          );
        }
        return true;
      } else {
        throw new Error('Falha na atualização do funcionário');
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
      return false;
    }
  }, [requisicao, BASE_URL, token, user]);
 
 const DisableEmployee = React.useCallback(async (NIF) => {
    try {
      const res = await requisicao(
        `${BASE_URL}/funcionario/inativar/${NIF}`,
        null,
        `PATCH`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        console.log('inativado com sucesso')
        return true;
      }
    } catch (error) {
      console.log("Requisição falhou:", error);
      return false;
    }
  }, []);
 
  return (
    <EmployeeContext.Provider
      value={{ GetAllEmployees, GetEmployee, DisableEmployee, AddEmployee,MutateAddNewEmployee,  EditEmployee, EmployeeData, updatedEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
