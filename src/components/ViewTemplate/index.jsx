import { LineTable } from "../LineTable";
import { PinkButton } from "../Buttons/pinkButton";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg"
import { useState } from "react";
import BasicModal from "../Modal";

export function TemplateView(){

    const url = window.location;
    // vai precisar de alteração
    const statusUser = url.pathname === "/gestao/turmas" ? "AAPM" :  "Status"
    const typeUser = url.pathname ===  "/gestao/turmas" ? "alunos" : "funcionários"

    const [searchTerm, setSearchTerm] = useState("")
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const clearSearch = () => {
        setSearchTerm("");
      };

    return(
        <main className="grid w-full p-2 max-w-[74.188] min-w-[23.813rem]" aria-label="conteúdo principal na tela gestão" >  

            <div className="flex justify-between my-4" >
            <h1 className="text-h5" >Todos os {typeUser}: </h1>
            <BasicModal TextButton={`Adicionar ${typeUser}`}>
                <h1 className=" text-h4">Adicionar funcionários</h1>

            </BasicModal>

            <PinkButton text={`Adicionar ${typeUser}`} size={"small"} align={"end"} />
            </div>

            {/* BARRA DE PESQUISA */}
            <form className="w-full flex align-center py-2 my-5" aria-label="Barra de pesquisa de usuário">

                        <input
                            type="text"
                            placeholder="pesquisar"
                            value={searchTerm}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-4 focus:outline-none border-2 focus:border-rosa-destaque border-cinza-100 rounded-lg"
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
            <section className="flex justify-between border-b-2 border-cinza-100 my-2 w-full" 
            aria-label="informações principais sobre os usuários">
                <p className="mx-14 px-1 fun-2 text-cinza-700" >Nome</p>
                <div className="flex" >
                    <p className="mx-5 px-8 fun-2 text-cinza-700" >{statusUser}</p>
                    <p className="text-center mx-5 px-4 fun-2 text-cinza-700" >Ações</p>
                </div>
            </section>

            <LineTable/>
        </main>
    )
}