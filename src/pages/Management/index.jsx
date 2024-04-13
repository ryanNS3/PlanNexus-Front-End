import { TemplateView } from "../../components/ViewTemplate";
import { Sidebar } from "../../components/Sidebar";
import { ManagementTab } from "../../components/ManagementTab";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";

import { AllLocker } from "../../components/AllLocker";


export function Management(){

    return(
            <div className="grid grid-cols-12 gap-5  mx-8 max-w-[90rem]" style={{margin: 'auto'}}>
                <Sidebar/>
                <Main>
                    <Header/>
                    <ManagementTab/>
                </Main>
        </div>

    )
}