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

export function NavLocker({ setPagination }) {
  const customTheme = withMT({
    theme: {
      // só é necessário para que a TABS dessa biblioteca funcione, não foi preciso passar nenhum estilo novo
    },
  });

  const content = [
    {
      label: "0 a 28",
      value: 0,
    },
    {
      label: "29 a 56",
      value: 1,
    },
    {
      label: "57 a 84",
      value: 2,
    },
    {
      label: "85 a 112",
      value: 3,
    },
    {
      label: "113 a 140",
      value: 4,
    },
    {
      label: "141 a 168",
      value: 5,
    },
    {
      label: "169 a 196",
      value: 6,
    },
    {
      label: "197 a 224",
      value: 7,
    },
    {
      label: "225 a 252",
      value: 8,
    },
    {
      label: "253 a 280",
      value: 9,
    },
  ];

  const [activeTab, setActiveTab] = React.useState("armarios");
  return (
    <ThemeProvider value={customTheme}>
      <Tabs value={activeTab}>
        <TabsHeade
          className="w-full justify-between gap-x-5 gap-y-2 flex-wrap mt-5 bg-cinza-50 text-preto rounded-lg p-0 "
          indicatorProps={{
            className:
              "w-[5.8rem] bg-gradient-to-r z-[1] from-[#1A1A1A] to-[#494747] text-cinza-50 rounded-lg",
          }}
        >
          {content.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => {
                setActiveTab(value);
                setPagination(value);
              }}
              className={
                activeTab === value
                  ? "text-cinza-50 z-[9] w-[5.65rem] h-[2.5rem] py-0"
                  : "w-[5.65rem] py-2.5"
              }
            >
              <p className=" text-fun2 relative z-[5]"> {label}</p>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {content.map(({ value }) => (
            <TabPanel key={value} value={value}></TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </ThemeProvider>
  );
}
