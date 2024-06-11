import React, { useContext, useState } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const LockerContext = React.createContext();
const BASE_URL = import.meta.env.VITE_API_URL;

export function LockerProvider({ children }) {
  const { token, user } = useContext(UserGlobal);
  const [dataLocker, setDataLocker] = useState([]);
  const { requisicao } = useAxios();
  const queryClient = useQueryClient();

  async function GetLocker() {
    try {
      const reqLocker = await requisicao(
        `${BASE_URL}/armario/todos`,
        null,
        "GET",
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      setDataLocker(reqLocker.json.response);
      return reqLocker.json.response;
    } catch (error) {
      console.error("Erro ao obter armários:", error);
    }
  }

  function allGetLockers() {
    const AllLockers = useQuery({
      queryKey: ["lockers"],
      queryFn: GetLocker,
      enabled: !!token && !!user,
    });
    const resAllLockers = AllLockers.data;
    const resLockerLoading = AllLockers.isLoading;
    const resLockerError = AllLockers.isError;
    return { AllLockers, resAllLockers, resLockerLoading, resLockerError };
  }

  const mutateLock = useMutation({
    mutationFn: allGetLockers,
    onSuccess: () => {
      queryClient.invalidateQueries(["lockers"]);
    },
  });

  async function UpdateLocker(dataLocker) {
    try {
      const reqStatus = await requisicao(
        `${BASE_URL}/armario/atualizar`,
        {
          numeroArmario: dataLocker.numero,
          idAluno: dataLocker.id_aluno,
          statusArmario: dataLocker.status,
        },
        "PATCH",
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      return reqStatus;
    } catch (error) {
      console.error("Erro ao atualizar armário:", error);
      throw error;
    }
  }

  const mutatePatchLock = useMutation({
    mutationFn: UpdateLocker,
    onSuccess: () => {
      queryClient.invalidateQueries(["lockers"]);
    },
  });

  return (
    <LockerContext.Provider
      value={{
        dataLocker,
        UpdateLocker,
        allGetLockers,
        mutateLock,
        mutatePatchLock,
      }}
    >
      {children}
    </LockerContext.Provider>
  );
}

// import React, { useContext, useState } from "react";
// import useAxios from "../hooks/useAxios";
// import { UserGlobal } from "./userContext";
// import { useQuery,  useMutation, useQueryClient } from "@tanstack/react-query";

// export const LockerContext = React.createContext();
// const BASE_URL = import.meta.env.VITE_API_URL;

// export function LockerProvider({ children }) {
//   const { token, user } = useContext(UserGlobal);
//   const [dataLocker, setDataLocker] = useState([]);
//   const { dados, requisicao } = useAxios();
//   const queryClient = useQueryClient()

//   async function GetLocker() {
//     const reqLocker = await requisicao(
//       `${BASE_URL}/armario/todos`,
//       null,
//       "GET",
//       {
//         authorization: `bearer ${token}`,
//         nif: user,
//       }
//     );
//     setDataLocker(reqLocker.json.response);
//   }

//   function allGetLockers() {
//     const AllLockers = useQuery({
//       queryKey: ['Lockers'],
//       queryFn: GetLocker,
//       enabled: !!token && !!user,
//     });
//     const resAllLockers = AllLockers.data;
//     const resLockerLoading = AllLockers.isLoading;
//     const resLockerError = AllLockers.isError;
//     return { AllLockers, resAllLockers, resLockerLoading, resLockerError };
//   }

//   const mutateLock = useMutation({
//     mutationFn: allGetLockers,
//     onSuccess: () => {
//       queryClient.invalidateQueries(['Lockers'])
//     },
//   })

//   async function UpdateLocker(dataLocker) {
//     const reqStatus = await requisicao(
//       `${BASE_URL}/armario/atualizar`,
//       {
//         numeroArmario: dataLocker.numero,
//         idAluno: dataLocker.id_aluno,
//         statusArmario: dataLocker.status,
//       },
//       "PATCH",
//       {
//         authorization: `bearer ${token}`,
//         nif: user,
//       }
//     );
//     return reqStatus, console.log(reqStatus, "aqui poh");
//   }

//   return (
//     // desserializa os valores que passo para ele
//     <LockerContext.Provider
//       value={{ dados, dataLocker, UpdateLocker, allGetLockers, mutateLock }}
//     >
//       {children}
//     </LockerContext.Provider>
//   );
// }
