import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Grafico } from "../../components/GraphicBar";
import { Main } from "../../components/Main";
import { SalesChart } from "../../components/SalesChart";
import { Agenda } from "../../components/Agenda";
import { Statistic } from "../../components/Statistic";
import BasicModal from "../../components/Modal";
import { AddStudent } from "../../components/AddStudent";

export function Home() {
  return (
    <div className="grid grid-cols-12 gap-5 mx-8 h-screen max-w-[90rem] px-8" style={{margin: 'auto'}}>
      <Sidebar />
      <Main>
        <Header />
        <Statistic />

        <div className="grid grid-cols-[1fr_auto] mt-18 gap-6">
          <h1 className="col-span-full text-h5">Geral</h1>
          <div className="gap-6">
            <SalesChart />
            <Grafico />
          </div>
          <Agenda />

          {/* Esse modal foi colocado na Home apenas para teste e será removido posteriormente */}
          <BasicModal TextButton="Adicionar Aluno">
            <AddStudent/>
          </BasicModal>
        </div>

      </Main>
    </div>
  );
}
