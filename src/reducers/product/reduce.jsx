import { ProductSchema } from "../../hooks/useZod";
import { nameSchema, priceSchema, comparePriceAndDiscount } from "../../hooks/useZod";
import { z } from "zod";

export  function productReduce(state,action){
    switch (action.type){
        case "HANDLE_CHANGE_NAME":
          return {...state,  nameProduct:action.payload}

        case "HANDLE_BLUR_NAME":{
          const { value, setError, name } = action.payload;
            try {
                nameSchema.parse(value);
                setError((prevState) => ({ ...prevState, [name]: false }));
            } catch (error) {
                const message = error.errors[1] ? error.errors[1].message : error.errors[0].message;
                setError((prevState) => ({ ...prevState, [name]: message }));
            }
            return state; // Adicionado para garantir o retorno do estado
        }

  
        case "HANDLE_CHANGE_PRICE":
          return {...state,  priceProduct:parseFloat(action.payload)}

        case "HANDLE_BLUR_PRICE":{
          const { value, setError, name } = action.payload;
            try {
                priceSchema.parse(value);
                setError((prevState) => ({ ...prevState, [name]: false }));
            } catch (error) {
                const message = error.errors[1] ? error.errors[1].message : error.errors[0].message;
                setError((prevState) => ({ ...prevState, [name]: message }));
            }
            return state; // Adicionado para garantir o retorno do estado

        }
  
        case "HANDLE_CHANGE_DISCOUNT":
          return {...state,  discountProduct:action.payload}

        case "HANDLE_BLUR_DISCOUUNT":{
          const { valor, desconto, setError, name } = action.payload;
          try {
              comparePriceAndDiscount.parse({valor, desconto});
              setError((prevState) => ({ ...prevState, [name]: false }));
          } catch (error) {
              const message = error.errors[1] ? error.errors[1].message : error.errors[0].message;
              setError((prevState) => ({ ...prevState, [name]: message }));
          }
          return state; // Adicionado para garantir o retorno do estado
      
        }
        
        case "HANDLE_CHANGE_DESCRIPTION":
          return {...state, descriptionProduct : action.payload}
  
        case "HANDLE_CHANGE_SIZE":
          let newSizeProduct
          if (action.payload.check) {
            newSizeProduct = [...state.sizeProduct, action.payload.value]
            return {...state, sizeProduct : newSizeProduct}
          } 
          else {
            newSizeProduct = state.sizeProduct.filter((size) => size !== action.payload.value)
            return {...state, sizeProduct : newSizeProduct}
          }
        case "HANDLE_ADD_SIZE":
          return
  
        case "HANDLE_CHANGE_COLOR":
          let colorsChange = [...state.colorsProduct];
          colorsChange[action.payload.id] = action.payload.value;
          return { ...state, colorsProduct: colorsChange };
  
        case "HANDLE_ADD_COLOR":
          const newAddColor = [...state.colorsProduct, `cor${state.colorsProduct.length}`]
          return {...state, colorsProduct : newAddColor}
        
          case "HANDLE_REMOVE_COLOR": {
            const keyOfColor = action.payload;
            const colorToRemove = state.colorsProduct[keyOfColor];

            // Remove a cor da lista de cores
            const filteredColors = state.colorsProduct.filter((_, index) => index != keyOfColor);

            // Remove todas as imagens associadas a essa cor
            const newImageArray = state.image.map(imageList =>
                imageList.filter(imageObj => !imageObj[colorToRemove])
            );

            // Atualiza o estado
            const updatedState = {
                ...state,
                colorsProduct: filteredColors,
                image: newImageArray
            };

            if (colorToRemove === state.selectedColor) {
                updatedState.selectedColor = null;
            }

            return updatedState;
        }
  
        case "HANDLE_SELECTED_COLOR":
          
          return {...state, selectedColor : action.payload }

        case "ON_DROP_IMAGE":
          const { index, file } = action.payload;
          const color = state.selectedColor;
      
          // Criar uma cópia do estado atual
          let newImage = [...state.image];
      
          // Verificar se ainda não há imagens associadas à primeira cor
          if (index !== 0 && newImage[0].length === 0) {
              // Adicionar arrays vazias para preencher os slots de imagens da primeira cor
              for (let i = 0; i < 4; i++) {
                  newImage[0].push([]);
              }
          }
      
          // Verificar se o objeto com o ID único já existe na posição
          const existingIndex = newImage[index].findIndex(item => item && item[color]);
      
          if (existingIndex === -1) {
              // Se não existe, adicionamos o novo objeto
              newImage[index] = [
                  ...newImage[index],
                  { [color]: { file } }
              ];
          } else {
              // Se já existe, substituímos o objeto existente
              newImage[index][existingIndex] = { [color]: { file } };
          }

          return { ...state, image: newImage };

        case "HANDLE_REMOVE_IMAGE":
          const { indexPosition, indexOfColor } = action.payload;
          // Faz uma cópia superficial do array de arrays
          let newArrayImage = [...state.image];
    
          // Faz uma cópia superficial do subarray onde a remoção ocorrerá
          let subArray = [...newArrayImage[indexPosition]];
    
          // Remove o item do subarray
          subArray.splice(indexOfColor, 1);
    
           // Substitui o subarray modificado no array principal
          newArrayImage[indexPosition] = subArray;
          return {...state, image : newArrayImage}

        default:{
          return state
        }
      }
}