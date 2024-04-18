import { LineTable } from "../LineTable";
import { SearchBar } from "../searchBar";
import BasicModal from "../Modal";
import { Filter } from "../../components/Filter"

export function TemplateView({children, typeUser, statusUser, role}){

    return(
        <main className="grid grid-cols-10 p-2 max-w-[74.188rem] min-w-[23.813rem]" aria-label="conteúdo principal na tela gestão" >  

            <div className="col-start-1 col-end-12 flex justify-between mt-10" >
            <h1 className="text-h5" >Todos os {typeUser}: </h1>
            <BasicModal TextButton={`Adicionar ${typeUser}`}>
                    <h1 className=" text-h5">Adicionar {typeUser}</h1>
                    {children}
                </BasicModal>
            </div>
            
            <SearchBar/>

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
            </section>
            <LineTable/>

        </main>
    )
}