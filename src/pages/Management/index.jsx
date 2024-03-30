import { TemplateView } from "../../components/ViewTemplate";
import { Sidebar } from "../../components/Sidebar";
import { NavBarGestao } from "../../components/NavBarGestao";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";

export function Management(){
    return(
        <div className="grid grid-cols-12 gap-2 mx-8 max-w-[90rem]">
                <Sidebar/>
            <Main>
                <Header/>
                <NavBarGestao/>
                <TemplateView/>
            </Main>
        </div>

    )
}