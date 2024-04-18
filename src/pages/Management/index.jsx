import { TemplateView } from "../../components/ViewTemplate";
import { Sidebar } from "../../components/Sidebar";
import 'react-toastify/dist/ReactToastify.css';
import { NavBarGestao } from "../../components/NavBarGestao";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { EmployeeForm } from "../../components/Form/employee";
import React from "react";
import BasicModal from "../../components/Modal";
import { EmployeeForm } from "../../components/Form/employee";
import { AddStudent } from "./../../components/AddStudent/index";


export function Management(){
    const url = window.location;
    return(
            <div className="grid grid-cols-12 gap-5  mx-8 max-w-[90rem]" style={{margin: 'auto'}}>
                <Sidebar/>
                <Main>
                    <Header/>
                    <NavBarGestao/>
                     {url.pathname === "/gestao/armarios" ? (
                      <AllLocker />
                    ) : (
                      <TemplateView>
                        <EmployeeForm />
                      </TemplateView>
                    )}
            <AddStudent />
                    <TemplateView>
                        <EmployeeForm/>
                    </TemplateView>
                </Main>
        </div>

    )
}


