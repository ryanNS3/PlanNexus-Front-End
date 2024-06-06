import React from "react";
import { LineTable, TemplateView } from "../../../ViewTemplate";
import { AddStudentMethod } from "../../../Form/AddStudentMethod";
import { StudentDetails } from "../../../StudentDetails";
import { StudentContext } from "../../../../context/studentsContext";

export default function TabClass() {
  const { queryGetStudents } = React.useContext(StudentContext);
  const StudentsData = queryGetStudents.data;

  const gridHeaderData = ["AAPM"];

  return (
    <TemplateView
      name="Turmas"
      formModal={<AddStudentMethod />}
      header_data={gridHeaderData}
    >
      {StudentsData &&
        StudentsData.json.response.map((student) => {
          return (
            <React.Fragment key={student}>
              <LineTable
                name={student.nome}
                photo={student.foto}
                grid={`67px 1fr repeat(${gridHeaderData.length + 1}, 100px)`}
                typeModal="UniqueModal"
                detailsModal={<StudentDetails student={student} />}
              >
                <div className="bg-[#64B140] rounded px-4 py-2">
                  <p className="text-[#fff]">
                    {student.associado ? "Sim" : "Não"}
                  </p>
                </div>
              </LineTable>
            </React.Fragment>
          );
        })}
    </TemplateView>
  );
}
