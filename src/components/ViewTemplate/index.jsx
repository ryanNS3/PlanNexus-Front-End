import { LineTable } from "../LineTable";
import { PinkButton } from "../Buttons/pinkButton";
import SearchSvg from "../../assets/header/search.svg";

export function TemplateView(){

    const url = window.location;
    const statusUser = url.pathname === "/home/turmas" ? "AAPM" : "Status"

    return(
        <main className="grid w-3/4 p-2 cols-12" aria-label="conteúdo principal na tela gestão" >  

            <div className="flex justify-between my-4" >
            <h1 className="text-h5" >Todos os alunos: </h1>
            <PinkButton text={"adicionar alunos"} size={"small"} align={"end"} />
            </div>

            {/* BARRA DE PESQUISA */}
            <form className="w-11/12 flex align-center py-2 my-5" aria-label="Barra de pesquisa de usuário">

                        <input
                            type="text"
                            placeholder="pesquisar"
                            className="w-full py-2 pl-10 pr-4 focus:outline-none border-2 focus:border-rosa-destaque border-cinza-100 rounded-lg"
                        />
                <img src={SearchSvg} className="px-4 absolute transform mt-3" alt="ícone de pesquisa"/>
        
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