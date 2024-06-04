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

const AapmManage = React.lazy(() => import("../aapmManagement"));
const AllLocker = React.lazy(() => import("../AllLocker/index"));
const TabClass = React.lazy(() => import("./tabs/class"));
const TabEmployee = React.lazy(() => import("./tabs/employee/index"));
const TabAapm = React.lazy(() => import("./tabs/aapm"));

export default function ManagementTab() {
  const [activeTab, setActiveTab] = React.useState("turmas");

  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    {
      label: "Turmas",
      value: "turmas",
      element: () => (
        activeTab === "turmas" && (
          <React.Suspense fallback={<div>Carregando...</div>}>
            <TabClass />
          </React.Suspense>
        )
      ),
    },
    {
      label: "Funcionários",
      value: "funcionarios",
      element: () => (
        activeTab === "funcionarios" && (
          <React.Suspense fallback={<div>Carregando...</div>}>
            <TabEmployee />
          </React.Suspense>
        )
      ),
    },
    {
      label: "AAPM",
      value: "AAPM",
      element: () => (
        activeTab === "AAPM" && (
          <React.Suspense fallback={<div>Carregando...</div>}>
            <AapmManage />
            <TabAapm />
          </React.Suspense>
        )
      ),
    },
    {
      label: "Armários",
      value: "armarios",
      element: () => (
        activeTab === "armarios" && (
          <React.Suspense fallback={<div>Carregando...</div>}>
            <AllLocker typeUser={'armários'} />
          </React.Suspense>
        )
      ),
    },
  ];

  return (
    <ThemeProvider value={customTheme}>
      <Tabs value={activeTab}>
        <TabsHeader
          className="w-full gap-4 mt-4 bg-cinza-50 text-preto rounded-lg h-[2.75rem] p-0 "
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
                  ? "text-cinza-50 z-[9] w-[8rem] h-[2.75rem] py-0"
                  : "w-[8rem]"
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
            <TabPanel className="px-0" key={value} value={value}>
              {element()}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ThemeProvider>
  );
}
