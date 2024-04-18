import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TemplateView } from "../ViewTemplate";
import { EmployeeForm } from "../Form/employee";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React,{useState} from 'react'
import { BadgeIcon } from "../../assets/Gestao/badge";
import { BalconyIcon } from "../../assets/Gestao/balcony";
import { SchoolIcon } from "../../assets/Gestao/school";

export function ManagementTab() {
  const content = [
    {
      label: "Turmas",
      value: "turmas",
      element: <TemplateView statusUser={'AAPM'} typeUser={'alunos'} children={'formulario'} />,
    },
    {
      label: "Funcionários",
      value: "funcionarios",
      element: <TemplateView statusUser={'Status'} typeUser={'funcionários'} role={'cargo'} children={<EmployeeForm/>}/>,
    },
    {
      label: "AAPM",
      value: "AAPM",
      element:  <TemplateView statusUser={'AAPM'} typeUser={'alunos'} />,
    },
    {
      label: "Armários",
      value: "armarios",
      element: `componente armarios`,
    },
  ];


  const [activeTab, setActiveTab] = React.useState("turmas");
  return(
    <Tabs value={activeTab}>
      <TabsHeader className="w-full mx-5 gap-4 mt-12 bg-cinza-100 text-black rounded-lg h-[2.75rem] p-0 " 
      indicatorProps={{
          className:
            "w-[8rem] bg-gradient-to-r from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
        }}>
        {content.map(({ label, value}) =>(
          <Tab key={value} value={value}
          onClick={() => setActiveTab(value)}
          className={activeTab === value ? "text-cinza-50 w-[8rem] h-[2.75rem] py-0" : "w-[8rem] py-4"} >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {content.map(({ value, element}) => (
          <TabPanel key={value} value={value}>
            {element}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}