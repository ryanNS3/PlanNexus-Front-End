import { TemplateView } from "../../components/ViewTemplate";
import { Sidebar } from "../../components/Sidebar";
import { NavBarGestao } from "../../components/NavBarGestao";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { AllLocker } from "../../components/AllLocker";

export function Management(){
    const url = window.location;

    return(
            <div className="grid grid-cols-12 gap-5 mx-8 max-w-[90rem]" style={{margin: 'auto'}}>
                <Sidebar/>
            <Main>
                <Header/>
                <NavBarGestao/>
                {url.pathname === "/gestao/armarios" ? <AllLocker /> : <TemplateView/> }
            </Main>
        </div>

    )
}