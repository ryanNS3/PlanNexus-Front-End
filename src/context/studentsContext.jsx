import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery,useQueryClient, useMutation } from "@tanstack/react-query";

export const studentContext = React.createContext()

export function StudentProvider({ children }) {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token')
    const queryClient = useQueryClient()
    const user = localStorage.getItem('user')
    const {requisicao} = useAxios()

    async function FetchAllStudents() {
        const requestAllStudents = await requisicao(`${BASE_URL}/aluno/todos`, null, "GET", {
            authorization: `bearer ${token}`,
            nif: user
        })

        return requestAllStudents
    }

    const AllStudentsData = useQuery({ queryKey : ['AllStudentsData'], queryFn : FetchAllStudents});
    const resStudentsData = AllStudentsData.data
    const resStudentsLoading = AllStudentsData.isLoading
    const resStudentError = AllStudentsData.isError


    async function SearchStudents({cpf}) {
        const reqSearchStudent = await requisicao(`${BASE_URL}/aluno/todos?CPF=${cpf}`, null, "GET", {
            authorization: `bearer ${token}`,
            nif: user
        })

        return reqSearchStudent
        // console.log(req)
    }

    // async function searchStudentByCPF({cpf}){
    //     const searchStudent = useQuery({ queryKey : ['StudentByCPF'], queryFn : SearchStudents(cpf)});
    //     const resStudent = searchStudent.data
    //     return resStudent
    // }

    // SearchStudents('82622435010')

    return (
        <studentContext.Provider value={{AllStudentsData, SearchStudents}}>
            {children}
        </studentContext.Provider>
    )
        
}