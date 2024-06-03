import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";
import { useQuery, useMutation } from "@tanstack/react-query";
 
export const DonatorContext = React.createContext();
 
export function DonatorProvider({ children }) {
  const { requisicao } = useAxios();
  const [updatedDonator, setUpdatedDonator] = React.useState(null);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')


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
    const AllMoneyDonation = useQuery({ queryKey : ['AllMoneyDonation'], queryFn : FetchAllMoney});
    const resMoneyData = AllMoneyDonation.data
    return { resMoneyData };
  };


  const postMoneyDonation = async (dataMoneyDonation) =>{
    try{
      const reqMoneyDonation = await requisicao(`${BASE_URL}/doacaoDinheiro/cadastro`, dataMoneyDonation, "POST", {
        authorization : `bearer ${token}`,
        nif: user
      })
      
      return reqMoneyDonation

    }
    catch (error) {
      console.log(error)
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }

  const mutateMoneyDonation = useMutation({
    mutationFn: postMoneyDonation,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllMoneyDonation']);
    }
  });


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
      console.log(error)
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }

  const mutateLockerDonation = useMutation({
    mutationFn: postLockerDonation,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllLockerDonation']);
    }
  });


  const postProductDonation = async ({dataProductDonation}) =>{
    try{
      const reqProductDonation = await requisicao(`${BASE_URL}/doacaoProduto/cadastro`, dataProductDonation, "POST", {
        authorization : `bearer ${token}`,
        nif: user,
        'Content-Type': 'multipart/form-data'
      })
      
      return reqProductDonation

    }
    catch (error) {
      console.log(error)
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }

  const mutateProductDonation = useMutation({
    mutationFn: postProductDonation,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProductDonation']);
    }
  });



  return (
    <DonatorContext.Provider
      value={{ useGetMoneyDonation, mutateLockerDonation, mutateMoneyDonation, mutateProductDonation, postProductDonation }}
    >
      {children}
    </DonatorContext.Provider>
  );
}