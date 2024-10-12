import { useState } from "react";
import SearchSvg from "../../assets/header/search.svg";
import ClearSvg from "../../assets/header/xmark.svg"


export function SearchBar(){
    const [searchTerm, setSearchTerm] = useState("")
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const clearSearch = () => {
        setSearchTerm("");
      };

      return(
        <>
            {/* BARRA DE PESQUISA */}
            <div className="w-full col-start-1 col-end-11 flex align-center py-2 my-5" aria-label="Barra de pesquisa de usuário">

                        <input
                            type="text"
                            placeholder="pesquisar"
                            value={searchTerm}
                            onChange={handleChange}
                            className="w-full py-2 pl-10 pr-4 focus:outline-none border-[3px] focus:border-rosa-destaque border-cinza-100 rounded-lg"
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
        
            </div>
        </>
      )
}
