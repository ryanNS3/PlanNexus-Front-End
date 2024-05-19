import React from "react";
import useAxios from "../hooks/useAxios";
import {useQuery} from "../../node_modules/@tanstack/react-query"
export const ProductContext = React.createContext();

export function ProductProvider({children}){
    const {dados, requisicao} = useAxios();
    const BASE_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')

    
    async function FetchGetProducts(){
        const requestApiProducts = await requisicao(BASE_URL,null,"GET", {
            authorization: `bearer ${token}`,
            nif: user,
        })
        return requestApiProducts
    }

    function GetProducts(){
        const AllProductsData = useQuery({queryKey: ['AllProductsData'], queryFn: FetchGetProducts  })
        return AllProductsData
    }

    return(
        <ProductContext.Provider value={{GetProducts}}>
            {children}
        </ProductContext.Provider>
    )
}