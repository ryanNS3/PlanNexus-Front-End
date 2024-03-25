import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Grafico } from "../../components/GraphicBar"
import { Main } from "../../components/Main";
import { SalesChart } from "../../components/SalesChart";

export function Home() {
  return (
    <div className="grid grid-cols-12 gap-5 mx-8 max-w-[90rem]">
      <Sidebar/>
      <Main>
        <Header/>
        <SalesChart/>
        <Grafico/>
      </Main>
    </div>
  );
}
