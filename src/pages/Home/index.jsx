import { Grafico } from "../../components/GraphicBar";
import { Main } from "../../components/Main";
import { SalesChart } from "../../components/SalesChart";
import { Statistic } from "../../components/Statistic";
import { Schedule } from "../../components/Schedule";

export function Home() {
  return (
    <>
      <Main>
        <div className="overflow-y-auto max-h-screen">
        <Statistic />
        <div className=" max-h-[900px]  mt-18 gap-6">
          <h1 className="col-span-full text-h5">Geral</h1>
          <div className=" grid grid-cols-2 grid-rows-2 gap-8 max-h-[400px] lg:max-h-[1000px] max-[1024px]:col-span-full">
            <div className=" row-span-2">
              <Grafico />
              <SalesChart />
            </div>
            <Schedule/>
          </div>
        </div>
        </div>

      </Main>
    </>
  );
}
