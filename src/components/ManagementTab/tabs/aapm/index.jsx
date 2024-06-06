import React from "react";
import { StudentContext } from "../../../../context/studentsContext";
import { LineTable, TemplateView } from "../../../ViewTemplate";
import { StudentDetails } from "../../../StudentDetails";

export default function TabAapm() {
  const gridHeaderData = ["AAPM"];
  const { queryGetStudents } = React.useContext(StudentContext);

  return (
    <TemplateView name="AAPM" header_data={gridHeaderData}>
      {queryGetStudents.data &&
        queryGetStudents.data.json.response.map((student) => {
          const condition = student.associado > 0;
          if (condition) {
            return (
              <LineTable
                name={student.nome}
                photo={student.foto}
                grid={`67px 1fr repeat(${gridHeaderData.length + 1}, 100px)`}
                typeModal="UniqueModal"
                detailsModal={<StudentDetails student={student} />}
              ></LineTable>
            );
          }
        })}
    </TemplateView>
  );
}
