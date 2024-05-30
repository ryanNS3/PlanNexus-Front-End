import React from "react";
import { studentContext } from "../../../../context/studentsContext";
import { LineTable, TemplateView } from "../../../ViewTemplate";
import { StudentDetails } from "../../../StudentDetails";

export default function TabAapm() {
    const gridHeaderData = ["AAPM"]
    const { AllStudentsData } = React.useContext(studentContext)
    

    return (
        <TemplateView name="AAPM"  header_data={gridHeaderData}>
            {AllStudentsData.data &&
                AllStudentsData.data.json.response.map((student) => {
                    const conditi = student.associado > 0
                    if (conditi) {
                        return (
                            <LineTable
                                name={student.nome}
                                photo={student.foto}
                                grid={`67px 1fr repeat(${gridHeaderData.length + 1}, 100px)`}
                                typeModal="UniqueModal"
                                detailsModal={<StudentDetails student={student}/>}
                            >

                            </LineTable>
                            
                        )
                    }
                        
                })
            
            }
        </TemplateView>
    )    
}