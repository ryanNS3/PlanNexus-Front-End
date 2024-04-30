import { LineTable } from "../LineTable";
import React from "react";
import { PinkButton } from "../Buttons/pinkButton";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg"
import { useState } from "react";
import BasicModal, { ExtendModal } from "../Modal";
import { Filter } from "../../components/Filter"

export function TemplateView({name, role, formModal, isExtendModal=false, dadosLineTbale}){
    const [isOpenModalForm, setIsOpenModalForm] = React.useState(false)
    const url = window.location;
    // vai precisar de alteração
    const statusUser = url.pathname === "/gestao/turmas" ? "AAPM" :  "Status"

    const [searchTerm, setSearchTerm] = useState("")
    let isModal = formModal 

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const clearSearch = () => {
        setSearchTerm("");
      };

    return(
        <main className="grid w-full p-2 max-w-[74.188] min-w-[23.813rem]" aria-label="conteúdo principal na tela gestão" >  
            <header  className="flex justify-between my-4 col-span-12" >
                <h1 className="text-h5" >Todos os {name}: </h1>
                {!isExtendModal &&
                <BasicModal isOpenModal={isOpenModalForm} setIsOpenModal={setIsOpenModalForm } TextButton={`Adicionar ${name}`}>
                    <h1 className=" text-h5">Adicionar {name}</h1>
                    {formModal}
                </BasicModal>
                }

                {isExtendModal &&
                   <ExtendModal TextButton={name} isOpenModal={isOpenModalForm} setIsOpenModal={setIsOpenModalForm}>
                        {formModal}
                   </ExtendModal>
                }
            </header>

            {/* BARRA DE PESQUISA */}
          
                <form className="w-full flex align-center py-2 my-5 col-span-12" aria-label={`Pesquisar ${name}`}>

                <input
                    className="w-full py-2 pl-10 pr-4 focus:outline-none border-2 focus:border-rosa-destaque border-cinza-100 rounded-lg"
                    type="text"
                    placeholder="pesquisar"
                    value={searchTerm}
                    onChange={handleChange}
                />
                {searchTerm && (
                    <img
                    className="w-4 h-4 absolute mt-5 transform -translate-y-1/2 -translate-x-11 right-3 cursor-pointer"
                    src={ClearSvg}
                    alt="Ícone de limpar"
                    onClick={clearSearch}
                    />
                )}

                <img src={SearchSvg} className="px-4 absolute transform mt-3 z-0" alt="ícone de pesquisa"/>
                </form>
          
            {/* HEADER DO TEMPLATE DE TABELAS */}
            <section 
            className="flex justify-between col-start-1 col-end-12 border-b-2 border-[#CCCCCC] mb-2" 
            aria-label="informações principais sobre os usuários">
                <p className="mx-14 px-1 fun-2 text-cinza-700" >Nome</p>
                <div className="flex justify-between" >
                    {/*role só vai ser aplicado para a tab de funcionário */}
                    <p className="mx-5 px-8 fun-2 text-cinza-700" >{role}</p>
                    <p className="mx-5 px-8 fun-2 text-cinza-700" >{statusUser}</p>
                    <p className="text-center mx-5 px-4 fun-2 text-cinza-700" >Ações</p>
                </div>
                <Filter/>
            </section>
            <section className="flex flex-col col-span-10 gap-2">
                <LineTable/>
            </section>
        </main>
    )
}
