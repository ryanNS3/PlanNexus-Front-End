import React from 'react'
import { LineTable, TemplateView } from '../../../ViewTemplate'
import { AddStudentMethod } from '../../../Form/AddStudentMethod';
import useAxios from '../../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { StudentDetails } from '../../../StudentDetails';

export function TabClass() {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    const gridHeaderData = ["AAPM"]
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

  return (
    <TemplateView
          name="Turmas"
          formModal={<AddStudentMethod />}
          header_data={gridHeaderData} 
      >
          
          { resStudentsData &&
              resStudentsData.json.response.map((student) => {
                  return (
                        <LineTable
                            name={student.nome}
                            photo={student.foto}
                            grid={`67px 1fr repeat(${gridHeaderData.length + 1}, 100px)`}
                            typeModal='UniqueModal'
                            detailsModal={<StudentDetails student={student}/>}
                            >
                            <div className="bg-[#64B140] rounded px-4 py-2">
                                <p className="text-[#fff]">{student.associado ? "Sim" : "Não"}</p>
                            </div>
                        </LineTable>      
                  )
              
          })}
    </TemplateView>
  )
}
