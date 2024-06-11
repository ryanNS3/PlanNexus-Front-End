import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
import { useQuery, useMutation } from "@tanstack/react-query";
 
export const DonatorContext = React.createContext();
 
export function DonatorProvider({ children }) {
  const { requisicao } = useAxios();
  const [updatedDonator, setUpdatedDonator] = React.useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const {token, user} = useContext(UserGlobal)

  const FetchAllMoney = React.useCallback(async () => {

      const AllMoneyDonation = await requisicao(
        `${BASE_URL}/doacaoDinheiro/todos`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      return AllMoneyDonation

});

  const useGetMoneyDonation = () => {
    const allDonates = useQuery({ queryKey : ['AllMoneyDonation'], queryFn : FetchAllMoney});
    const resMoneyData = allDonates.data
    return { resMoneyData };
  };


  // GET ARMARIOS
  const FetchLockerDonation = React.useCallback(async () => {

      const AllLockerDon = await requisicao(
        `${BASE_URL}/doacaoArmario/todos`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      return AllLockerDon

});

  const useGetLockerDonation = () => {
    const allDonateLocker = useQuery({ queryKey : ['AllLockerDonation'], queryFn : FetchLockerDonation});
    const resLockerData = allDonateLocker.data
    return { resLockerData };
  };

  // GET PRODUTOS
  const FetchProductDonation = React.useCallback(async () => {

    const AllProductDon = await requisicao(
      `${BASE_URL}/doacaoProduto/todas`,
      null,
      `GET`,
      {
        authorization: `bearer ${token}`,
        nif: user,
      }
    );
    return AllProductDon

});

const useGetProductDonation = () => {
  const allDonateProduct = useQuery({ queryKey : ['AllProductDonation'], queryFn : FetchProductDonation});
  const resProductData = allDonateProduct.data
  return { resProductData };
};


  const postMoneyDonation = async (dataMoneyDonation) =>{
    try{
      const reqMoneyDonation = await requisicao(`${BASE_URL}/doacaoDinheiro/cadastro`, dataMoneyDonation, "POST", {
        authorization : `bearer ${token}`,
        nif: user,
        'Content-Type': 'multipart/form-data'
      })
      
      return reqMoneyDonation

    }
    catch (error) {
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }


  const postLockerDonation = async (dataLockerDonation) =>{
    try{
      const reqLockerDonation = await requisicao(`${BASE_URL}/doacaoArmario/cadastro`, dataLockerDonation, "POST", {
        authorization : `bearer ${token}`,
        nif: user,
        'Content-Type': 'multipart/form-data'
      })
      
      return reqLockerDonation

    }
    catch (error) {
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }


  const postProductDonation = async (dataProductDonation) =>{
    try{
      const reqProductDonation = await requisicao(`${BASE_URL}/doacaoProduto/cadastro`, dataProductDonation, "POST", {
        authorization : `bearer ${token}`,
        nif: user,
        // 'Content-Type': 'multipart/form-data'
      })
      
      return reqProductDonation

    }
    catch (error) {
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }



  return (
    <DonatorContext.Provider
      value={{ useGetMoneyDonation, postLockerDonation, postMoneyDonation, postProductDonation, useGetLockerDonation, useGetProductDonation }}
    >
      {children}
    </DonatorContext.Provider>
  );
}