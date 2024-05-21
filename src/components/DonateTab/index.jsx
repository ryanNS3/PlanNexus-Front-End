import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { TemplateViewTab } from "../ViewTemplateTab";
import { EmployeeForm } from "../Form/employee";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import withMT from "@material-tailwind/react/utils/withMT";

export function DonateTab() {
  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    {
      label: "Transporte",
      value: "transporte",
      element: <TemplateViewTab />,
    },
    {
      label: "Alimentícios",
      value: "alimenticios",
      element: <TemplateViewTab />,
    },
    {
      label: "Dinheiro",
      value: "dinheiro",
      element: <TemplateViewTab />,
    },
  ];

  const [activeTab, setActiveTab] = React.useState("transporte");
  return (
    <ThemeProvider value={customTheme}>
      <Tabs className="w-full" value={activeTab}>
        <div className="flex justify-between">
          <h1 className="text-h5">Auxílios Fixos</h1>
          <TabsHeader
            className="w-[430px] gap-4  bg-cinza-50 text-preto rounded-lg h-[2.75rem] p-0 "
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
                    : "w-[8rem] py-4"
                }
              >
                <p className=" text-fun2 relative z-[5]"> {label}</p>
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <TabsBody>
          {content.map(({ value, element }) => (
            <TabPanel key={value} value={value}>
              {element}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ThemeProvider>
  );
}