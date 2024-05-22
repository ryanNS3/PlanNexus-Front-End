import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export const ProductContext = React.createContext();

export function ProductProvider({ children }) {
  const { dados, requisicao } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = window.localStorage.getItem('token');
  const user = window.localStorage.getItem('user');


  const FetchPostProduct = async ( dataCreateProduct) =>{
    const requestApiProducts = await requisicao(`${BASE_URL}`, dataCreateProduct, "POST", {
      authorization : `bearer ${token}`,
      nif: user
    })
  }

  const FetchGetProducts = async () => {
    const requestApiProducts = await requisicao(`${BASE_URL}/produto/todos`, null, "GET", {
      authorization: `bearer ${token}`,
      nif: user,
    });
    console.log(requestApiProducts)
    return requestApiProducts;
  };

  const GetProducts = () => {
      const AllProductsData = useQuery({ queryKey : ['AllProductsData'], queryFn : FetchGetProducts});
      const resProductData = AllProductsData.data
      return { resProductData };
    };

  return (
    <ProductContext.Provider value={{ GetProducts, FetchGetProducts }}>
      {children}
    </ProductContext.Provider>
  );
}