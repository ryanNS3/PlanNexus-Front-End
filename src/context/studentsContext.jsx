import React, {useContext} from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
import { useQuery,useQueryClient, useMutation } from "@tanstack/react-query";

export const studentContext = React.createContext()

export function StudentProvider({ children }) {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const queryClient = useQueryClient()
    const {token, user} = useContext(UserGlobal)
    const {requisicao} = useAxios()

    async function FetchAllStudents() {
        const requestAllStudents = await requisicao(`${BASE_URL}/aluno/todos`, null, "GET", {
            authorization: `bearer ${token}`,
            nif: user
        })

        return requestAllStudents
    }

    const getStudents = () => {
        const AllStudentsData = useQuery({ queryKey : ['AllStudentsData'], queryFn : FetchAllStudents});
        const resStudentsData = AllStudentsData.data
        return resStudentsData
    }
    // const resStudentsLoading = AllStudentsData.isLoading
    // const resStudentError = AllStudentsData.isError

    return (
        <studentContext.Provider value={{getStudents}}>
            {children}
        </studentContext.Provider>
    )
        
}