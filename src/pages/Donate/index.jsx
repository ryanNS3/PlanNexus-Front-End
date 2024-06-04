import { Main } from "../../components/Main";
import { DonateChart, DonateChart2 } from "../../components/DonateChart";
import { DonateTab } from "../../components/DonateTab";
import React, { useContext } from "react";

export function Donate() {
  
  return (
    <Main>
      <div className="grid grid-cols-[1fr_auto] mt-18 gap-6">
        <h1 className="col-span-full text-h5">Visão geral</h1>
        <div className="grid grid-cols-2 gap-2">
          <DonateChart />
          <DonateChart2 />
        </div>
      </div>
      <div className="w-full flex mt-10">
        <DonateTab />
      </div>
    </Main>
  );
}
