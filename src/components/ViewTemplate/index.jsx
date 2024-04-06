import { LineTable } from "../LineTable";
import { PinkButton } from "../Buttons/pinkButton";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg"
import { useState } from "react";
import { SearchBar } from "../searchBar";
import { NavBarGestao } from "../NavBarGestao";


export function TemplateView(){

    const url = window.location;
    // vai precisar de alteração
    const statusUser = url.pathname === "/gestao/turmas" ? "AAPM" :  "Status"
    const typeUser = url.pathname ===  "/gestao/turmas" ? "alunos" : "funcionários"

    return(
        <main className="grid grid-cols-10 p-2 max-w-[74.188] min-w-[23.813rem]" aria-label="conteúdo principal na tela gestão" >  

            <div className="col-start-1 col-end-12 flex justify-between mt-10" >
            <h1 className="text-h5 mr-10" >Todos os {typeUser}: </h1>

            <PinkButton text={`Adicionar ${typeUser}`} size={"small"} align={"end"} className="col-span-10 pl-10" />
            </div>

            <SearchBar/>
            

            {/* HEADER DO TEMPLATE DE TABELAS */}
            <section className="flex justify-between col-start-1 col-end-12 border-b-2 border-[#CCCCCC] mb-2"
            aria-label="informações principais sobre os usuários">
                <p className="mx-14 px-1 fun-2 text-cinza-700" >Nome</p>
                <div className="flex justify-between" >
                    <p className="mx-5 px-8 fun-2 text-cinza-700" >{statusUser}</p>
                    <p className="text-center mx-5 px-4 fun-2 text-cinza-700" >Ações</p>
                </div>
            </section>


            <LineTable/>

        </main>
    )
}