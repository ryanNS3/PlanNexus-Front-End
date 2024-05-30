import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import {  useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toastifyContext } from "./toastifyContext";

export const ProductContext = React.createContext();

export function ProductProvider({ children }) {
  const { dados, requisicao } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = window.localStorage.getItem('token');
  const user = window.localStorage.getItem('user');
  const queryClient = useQueryClient()

  const CalcAllStockForOneProduct = (product) => {
    const allStock = product?.reduce((acc, item) => {
      const allSize = item.tamanhos.reduce((acc, size) => {
        return acc + size.qtd_estoque
      }, 0)
      return acc + allSize
    }, 0)
    
    const allReserved = product?.reduce((acc, item) => {
      const allSize = item.tamanhos.reduce((acc, size) => acc + size.qtd_reservada, 0)
      return acc + allSize
    },0)
    console.log("a",allStock, "q", allReserved)

    return { allStock : allStock, allReserved : allReserved }
  }

  const FetchPostProduct = async ( dataCreateProduct) =>{
    try{
      const requestApiProducts = await requisicao(`${BASE_URL}/produto/`, dataCreateProduct, "POST", {
        authorization : `bearer ${token}`,
        nif: user,
        'Content-Type': 'multipart/form-data'
      })
      
      return requestApiProducts

    }
    catch (error) {
      console.log(error)
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }
  }
  
  const mutateCreateNewProduct = useMutation({
    mutationFn: FetchPostProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProductsData']);
    }
  });

  const FetchPatchEditingProduct = async (updateDataProduct) => {
    try {
      const requestApiProducts = await requisicao(`${BASE_URL}/produto/editar`, updateDataProduct, "PATCH", {
        authorization: `bearer ${token}`,
        nif: user
      })

      if (!requestApiProducts.ok) {
        throw new Error(responseData.message || 'Erro ao fazer a requisição');
      }
      
      return requestApiProducts
    } 
    catch (error) {
      throw new Error(error.message || 'Erro ao fazer a requisição');
      
    }

  }

  const mutatePatchProduct = useMutation({
    mutationFn: FetchPatchEditingProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProductsData'])
    },
  })

  const FetchPutProductReplacent = async (dataStockNumberAdd) => {
    const requestApiProducts = await requisicao(`${BASE_URL}/produto/estoque`, dataStockNumberAdd, "PATCH", {
      authorization: `bearer ${token}`,
      nif: user
    })

    return requestApiProducts
  }

  const mutateReplacentProducts = useMutation({
    mutationFn: FetchPutProductReplacent,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProductsData'])
      // Notification("sucess", "Reposição feita com sucesso")
    },

  })

  const FetchGetProducts = async () => {
    const requestApiProducts = await requisicao(`${BASE_URL}/produto/todos`, null, "GET", {
      authorization: `bearer ${token}`,
      nif: user,
    });
    return requestApiProducts;
  };

  const GetProducts = () => {
      const AllProductsData = useQuery({ queryKey : ['AllProductsData'], queryFn : FetchGetProducts});
      const resProductData = AllProductsData.data
      return { resProductData };
  };
  
  const useGroupDataProducts = (resProductData) => {
    const [groupProduct, setGroupProduct] = React.useState(null)

    React.useEffect(() => {

      if (resProductData && resProductData.json && resProductData.json.response) {
        const groupedProducts = resProductData.json.response.reduce((acc, product) => {
          if (!acc[product.nome]) {
            acc[product.nome] = {
              nome: product.nome,
              descricao: product.descricao,
              brinde: product.brinde,
              desconto: product.desconto,
              produtos: []
            }
          }
  
          const existingProduct = acc[product.nome].produtos.find(p => p.cor === product.cor)
  
          if (existingProduct) {
            existingProduct.tamanhos.push({
              id_produto: product.id_produto,
              tamanho: product.tamanho,
              qtd_estoque: product.qtd_estoque,
              qtd_reservada: product.qtd_reservada,
              valor: product.valor
            })
            existingProduct.fotos.push(...product.foto)
          } else {
            acc[product.nome].produtos.push({
              cor: product.cor,
              tamanhos: [{
                id_produto: product.id_produto,
                tamanho: product.tamanho,
                qtd_estoque: product.qtd_estoque,
                qtd_reservada: product.qtd_reservada,
                valor: product.valor
              }],
              fotos: [...product.foto]
            })
          }
  
          return acc
        }, {})
  
        const result = Object.values(groupedProducts)
        setGroupProduct(result)
     
      }
    }, [resProductData])

    return {groupProduct}
  }

    
    // get brindes ativos
    const FetchGift = async() => {
      const req = await requisicao(`${BASE_URL}/produto/unico`, null, "GET", {
        authorization: `bearer ${token}`,
        nif: user,
      })
      return req
    }

    const GetGiftProduct = () => {
      const {data, isLoading} = useQuery({queryKey : ['giftData'], queryFn: FetchGift})
      const resOneProduct = data
      return {resOneProduct}
    }
 


    // atualizar brinde
    const SwitchGift = async(listId) => {
      const req = await requisicao(`${BASE_URL}/produto/trocarBrinde`, {listaIdProduto : listId}, 'PATCH', {
          authorization: `bearer ${token}`,
          nif: user
      })
      return req
    }    


  return (
    <ProductContext.Provider value={{CalcAllStockForOneProduct, GetProducts,mutateCreateNewProduct, mutateReplacentProducts, mutatePatchProduct, useGroupDataProducts,  GetGiftProduct, SwitchGift }}>
      {children}
    </ProductContext.Provider>
  );
}
