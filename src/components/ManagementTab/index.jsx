import { TemplateView } from "../ViewTemplate";
import { EmployeeForm } from "../Form/employee";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";
import { AllLocker } from "../AllLocker/index";
import { AapmManage } from "../aapmManagement";
import { AddMultipleStudents } from "../Form/AddMultipleStudents";
import { AddStudentMethod } from "../Form/AddStudentMethod";

export function ManagementTab() {

  const [isOpenModalFormClasses, setIsOpenModalFormClasses] = React.useState(false)
  const [isOpenModalFormEmployee, setIsOpenModalFormEmployee] = React.useState(false)
  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    {
      label: "Turmas",
      value: "turmas",
      element: <TemplateView statusUser={'AAPM'} role={"teste"} isOpenModal={isOpenModalFormClasses} setIsOpenModal={setIsOpenModalFormClasses} formModal={<AddStudentMethod />} name="Turmas" header_data={["AAPM"]} type="students" />,
    },
    {
      label: "Funcionários",
      value: "funcionarios",
      element: <TemplateView statusUser={'Status'} isOpenModal={isOpenModalFormEmployee} setIsOpenModal={setIsOpenModalFormEmployee} formModal={<EmployeeForm/>} name="Funcionários" role={'cargo'} header_data={['Nome', 'Cargo']} type="employees" />,
    },
    {
      label: "AAPM",
      value: "AAPM",
      element: <>
      <AapmManage/>
      <TemplateView formModal={<></>} name="Contribuidores" header_data={["AAPM"]} type="students" />
      </>,
    },
    {
      label: "Armários",
      value: "armarios",
      element: (
        <AllLocker typeUser={'armários'}/>
      ),
    },
  ];

  const [activeTab, setActiveTab] = React.useState("turmas");
  return (
    <ThemeProvider value={customTheme}>
      <Tabs value={activeTab}>
        <TabsHeader
          className="w-full gap-4 mt-12 bg-cinza-50 text-preto rounded-lg h-[2.75rem] p-0 "
          indicatorProps={{
            className:
              "w-[8rem] bg-gradient-to-r z-[1] from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
          }}
        >
          {content.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? "text-cinza-50 z-[9]   w-[8rem] h-[2.75rem] py-0"
                  : "w-[8rem] "
              }
            >
              <button className="text-fun2 relative z-[5]" onClick={(event) => event.preventDefault()}>
                {label}
              </button>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {content.map(({ value, element }) => (
            <TabPanel className=" px-0" key={value} value={value}>
              {element}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ThemeProvider>
  );
}