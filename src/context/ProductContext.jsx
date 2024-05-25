import React, { useContext } from "react";
import useAxios from "../hooks/useAxios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toastifyContext } from "./toastifyContext";

export const ProductContext = React.createContext();

export function ProductProvider({ children }) {
  const { dados, requisicao } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const token = window.localStorage.getItem('token');
  const user = window.localStorage.getItem('user');
  const queryClient = useQueryClient()
  const {Notification} = useContext(toastifyContext)


  const FetchPostProduct = async ( dataCreateProduct) =>{
    const requestApiProducts = await requisicao(`${BASE_URL}/produto/`, dataCreateProduct, "POST", {
      authorization : `bearer ${token}`,
      nif: user,
      'Content-Type': 'multipart/form-data'
    })

    return requestApiProducts
  }
  
  const mutateCreateNewProduct = useMutation({
    mutationFn: FetchPostProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(['AllProductsData']);
      Notification("sucess", "Produto criado com sucesso")
    },
    onError: () => {
      Notification("error", "Produto não cadastrado")
    }
  });

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
    console.log(requestApiProducts)
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
            acc[product.nome] = { nome: product.nome, produtos: [] }
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

  return (
    <ProductContext.Provider value={{ GetProducts,mutateCreateNewProduct, mutateReplacentProducts, useGroupDataProducts }}>
      {children}
    </ProductContext.Provider>
  );
}