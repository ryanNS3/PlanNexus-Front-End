import { TemplateView } from "../../components/ViewTemplate";
import { Sidebar } from "../../components/Sidebar";
import { ManagementTab } from "../../components/ManagementTab";
import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import React from "react";

import { EmployeeForm } from "../../components/Form/employee";

import BasicModal from "../../components/Modal";

import { AddStudent } from "./../../components/AddStudent/index";


export function Management(){

    return(
         <>
             <Main>
                 <NavBarGestao/>
                     {url.pathname === "/gestao/armarios" ? (
                      <AllLocker />
                    ) : (
                      <TemplateView formModal={<EmployeeForm/>}>
                        <EmployeeForm />
                      </TemplateView>
                    )}
                <AddStudent />
                </Main>
        </>

    )
}


