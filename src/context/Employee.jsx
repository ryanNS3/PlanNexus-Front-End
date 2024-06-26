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
  const {token, user} = useContext(UserGlobal)

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
      return false;
    }
  }, [token, user, requisicao, BASE_URL]);


  function GetAllEmployees() {
    const AllEmployees = useQuery({ queryKey : ['AllEmployees'], queryFn : FetchAllEmploye, enabled: !!token && !!user});
    const resAllEmployees = AllEmployees.data
    const resProductLoading = AllEmployees.isPending
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

      if (res && res.res.status === 200) {
        setEmployeeData(res.json.response);
        return true;
      }
    } catch (error) {
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
         return true;
       }
     } catch (error) {
       return false;
     }
   }, []);
   
   const sendRecoveryEmail = React.useCallback(async (email) => {
      try {
        const res = await requisicao(
          `${BASE_URL}/smtp/recuperarSenha`,
          {email: email},
          `POST`,
          null
        );
        if (res && res.res.status === 200) {
          return true;
        }
      } catch (error) {
        return false;
      }
    }, []);
    
    const ResetPassword = React.useCallback(async (token, senha) => {
       try {
         const res = await requisicao(
           `${BASE_URL}/smtp/definirSenha/${token}`,
           {senha: senha},
           `POST`,
           null
         );
         if (res && res.res.status === 200) {
           return true;
         }
       } catch (error) {
         return false;
       }
     }, []);
 
  return (
    <EmployeeContext.Provider
      value={{ GetAllEmployees, GetEmployee, DisableEmployee, AddEmployee, MutateAddNewEmployee, EditEmployee, sendRecoveryEmail, ResetPassword, EmployeeData, updatedEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}
