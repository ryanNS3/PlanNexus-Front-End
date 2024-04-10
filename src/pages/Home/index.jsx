import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Grafico } from "../../components/GraphicBar";
import { Main } from "../../components/Main";
import { SalesChart } from "../../components/SalesChart";
import { Outlet } from "react-router-dom";
import { NavBarGestao } from "../../components/NavBarGestao";
import { Schedule } from "../../components/Schedule";
import { Statistic } from "../../components/Statistic";

export function Home() {
  return (
    <div className="grid grid-cols-12 gap-5 mx-8 ">
      <Sidebar />
      <Main>
        <Header />
        <Statistic />

        <div className="grid grid-cols-[1fr_auto] mt-18 gap-6">
          <h5 className="col-span-full text-h5">Geral</h5>
          <div className=" flex flex-col gap-6">
            <SalesChart />
            <Grafico />
          </div>
          <Schedule />
        </div>

      </Main>
    </div>
  );
}
