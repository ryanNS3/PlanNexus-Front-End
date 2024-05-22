import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Grafico } from "../../components/GraphicBar";
import { Main } from "../../components/Main";
import { DonateChart } from "../../components/DonateChart";
import { Agenda } from "../../components/Agenda";
import { Statistic } from "../../components/Statistic";
import { SearchBar } from "../../components/searchBar";
import { Filter } from "../../components/Filter";
import { DonateTab } from "../../components/DonateTab";
import useAxios from "../../hooks/useAxios";
import { UserGlobal } from "../../context/userContext";
import React, { useContext } from "react";

export function Donate() {
  return (
    <Main>
      <div className="grid grid-cols-[1fr_auto] mt-18 gap-6">
        <h1 className="col-span-full text-h5">Visão geral</h1>
        <div className="grid grid-cols-2">
          <DonateChart />
          <DonateChart />
        </div>
      </div>
      <div className="w-full flex mt-10">
        <DonateTab />
      </div>
    </Main>
  );
}
