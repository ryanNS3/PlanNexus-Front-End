import React from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { toastifyContext } from "./toastifyContext";

export const StudentContext = React.createContext();

export function StudentProvider({ children }) {
  const queryClient = useQueryClient();

  const BASE_URL = import.meta.env.VITE_API_URL;
  const { token, user } = React.useContext(UserGlobal);
  const { Notification } = React.useContext(toastifyContext);
  const { requisicao } = useAxios();

  // GET (/aluno/todos): Recuperar todos os alunos existentes

  const getStudents = async () => {
    const requestAllStudents = await requisicao(
      `${BASE_URL}/aluno/todos`,
      null,
      "GET",
      {
        authorization: `bearer ${token}`,
        nif: user,
      }
    );

    return requestAllStudents;
  };

  const queryGetStudents = useQuery({
    queryKey: ["AllStudentsData"],
    queryFn: getStudents,
  });

  // POST (/aluno/cadastro/unico): Adiciona um único aluno

  const createStudent = async (data) => {
    try {
      const requestCreateStudent = await requisicao(
        `${BASE_URL}/aluno/cadastro/unico`,
        data,
        "POST",
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );

      if (!requestCreateStudent.res.status >= 400) {
        throw new Error(responseData.message || "Erro ao fazer a requisição");
      }

      return requestCreateStudent;
    } catch {
      throw new Error(error.message || "Erro ao fazer a requisição");
    }
  };

  const mutatePostStudent = useMutation({
    mutationFn: createStudent,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["AllStudentsData"]);
      Notification("sucess", "Aluno adicionado com sucesso");
    },
    onError: () => {
      Notification("error", "Aluno não adicionado");
    },
  });

  // POST (/aluno/cadastro/multiplos): Adiciona vários alunos

  const createStudents = async (data) => {
    try {
      const requestCreateStudents = await requisicao(
        `${BASE_URL}/aluno/cadastro/multiplos`,
        { alunosFile: data },
        "POST",
        {
          authorization: `bearer ${token}`,
          nif: user,
          "Content-Type": "multipart/form-data",
        }
      );

      if (!requestCreateStudents.res.status >= 400) {
        throw new Error(responseData.message || "Erro ao fazer a requisição");
      }

      return requestCreateStudents;
    } catch {
      throw new Error(error.message || "Erro ao fazer a requisição");
    }
  };

  const mutatePostStudents = useMutation({
    mutationFn: createStudents,
    onSuccess: () => {
      queryClient.invalidateQueries(["AllStudentsData"]);
      Notification("sucess", "Alunos adicionados com sucesso");
    },
    onError: () => {
      Notification("error", "Alunos não adicionados");
    },
  });

  // PATCH (/aluno/atualizar): Atualizar alunos existentes

  const updateStudent = async (data) => {
    try {
      const requestUpdateStudent = await requisicao(
        `${BASE_URL}/aluno/atualizar`,
        data,
        "PATCH",
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );

      if (!requestUpdateStudent.res.status >= 400) {
        throw new Error(responseData.message || "Erro ao fazer a requisição");
      }
    } catch {
      throw new Error(error.message || "Erro ao fazer a requisição");
    }
  };

  const mutatePatchStudents = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(["AllStudentsData"]);
      Notification("sucess", "Aluno atualizado com sucesso");
    },
    onError: () => {
      Notification("error", "Aluno não atualizado");
    },
  });

  return (
    <StudentContext.Provider value={{ queryGetStudents, mutatePostStudent, mutatePostStudents, mutatePatchStudents }}>
      {children}
    </StudentContext.Provider>
  );
}