import React from "react";
import useAxios from "../hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const ProductContext = React.createContext();

export function ProductProvider({ children }) {
  const { dados, requisicao } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = window.localStorage.getItem('token');
  const user = window.localStorage.getItem('user');

  const FetchGetProducts = async () => {
    const requestApiProducts = await requisicao(`${BASE_URL}/produto/todos`, null, "GET", {
      authorization: `bearer ${token}`,
      nif: user,
    });
    // console.log(requestApiProducts)
    return requestApiProducts;
  };

  const GetProducts = () => {
      const AllProductsData = useQuery({ queryKey : ['AllProductsData'], queryFn : FetchGetProducts});
      const resProductData = AllProductsData.data
      return { resProductData };
    };

    
    // get brindes ativos
    const FetchGift = async() => {
      const req = await requisicao(`${BASE_URL}/produto/unico`, null, "GET", {
        authorization: `bearer ${token}`,
        nif: user,
      })
      return req
    }

    const GetGiftProduct = () => {
      const {data} = useQuery({queryKey : ['giftData'], queryFn: FetchGift})
      const resOneProduct = data
      // console.log(resOneProduct)
      return {resOneProduct}
    }


    // atualizar brinde
    const FetchSwitchGift = async(listId) => {
      const req = await requisicao(`${BASE_URL}/produto/trocarBrinde`, listId, 'PATCH', {
          authorization: `bearer ${token}`,
          nif: user
      })
      return req
    }    

    const SwitchGift = () => {
        const queryClient = useQueryClient()

        const newGift = useMutation({
          mutationFn: FetchSwitchGift, 
          onSuccess: (listId, variables) => {
            queryClient.setQueryData(['giftData',{id: variables.id} ], listId)
          }
        })
        return newGift
    }


  return (
    <ProductContext.Provider value={{ GetProducts, FetchGetProducts, GetGiftProduct, SwitchGift}}>
      {children}
    </ProductContext.Provider>
  );
}