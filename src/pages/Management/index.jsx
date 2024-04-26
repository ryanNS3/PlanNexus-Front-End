import { TemplateView } from "../../components/ViewTemplate";
import { Sidebar } from "../../components/Sidebar";
import 'react-toastify/dist/ReactToastify.css';
import { NavBarGestao } from "../../components/NavBarGestao";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import React from "react";
import { EmployeeForm } from "../../components/Form/employee";
import { AddStudent } from "./../../components/AddStudent/index";


export function Management(){
    const url = window.location;
    return(
            <>
                <Main>
                    <NavBarGestao/>
                     {url.pathname === "/gestao/armarios" ? (
                      <AllLocker />
                    ) : (
                      <TemplateView>
                        <EmployeeForm />
                      </TemplateView>
                    )}
                <AddStudent />
                </Main>
        </>

    )
}


