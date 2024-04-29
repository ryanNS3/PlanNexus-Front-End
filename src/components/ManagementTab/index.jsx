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
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";
import { AllLocker } from '../AllLocker/index'
import { LockerForm } from "../Form/locker";
import { AddStudent } from "../AddStudent";

export function ManagementTab() {
  const customTheme = withMT({
        theme: {
          
            // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
            
          },
        })
  
  const content = [
    {
      label: "Turmas",
      value: "turmas",
      element: <TemplateView statusUser={'AAPM'} role={"teste"} formModal={<AddStudent/>} name="Turmas"  />,
    },
    {
      label: "Funcionários",
      value: "funcionarios",
      element: <TemplateView statusUser={'Status'} formModal={<EmployeeForm/>} name="AAPM"  role={'cargo'} />,
    },
    {
      label: "AAPM",
      value: "AAPM",
      element:  <TemplateView statusUser={'AAPM'} typeUser={'alunos'} name="AAPM" />,
    },
    {
      label: "Armários",
      value: "armarios",
      element: <AllLocker statusUser={'armarios'} typeUser={'armários'} children={<LockerForm/>}/>,
    },
  ];


  const [activeTab, setActiveTab] = React.useState("turmas");
  return <ThemeProvider value={customTheme} >
    
    <Tabs value={activeTab}>
      <TabsHeader className="w-full mx-5 gap-4 mt-12 bg-cinza-50 text-preto rounded-lg h-[2.75rem] p-0 " 
      indicatorProps={{
          className:
            "w-[8rem] bg-gradient-to-r z-[1] from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
        }}>
        {content.map(({ label, value}) =>(
          <Tab key={value} value={value}
          onClick={() => setActiveTab(value)}
          className={activeTab === value ? "text-cinza-50 z-[9]   w-[8rem] h-[2.75rem] py-0" : "w-[8rem] py-4"} >
            <p className=" text-fun2 relative z-[5]"> {label}</p>
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
  </ThemeProvider>
}
