export  function productReduce(state,action){
    switch (action.type){
        case "HANDLE_CHANGE_NAME":
          return {...state,  nameProduct:action.payload}
  
        case "HANDLE_CHANGE_PRICE":
          return {...state,  priceProduct:action.payload}
  
        case "HANDLE_CHANGE_DISCOUNT":
          return {...state,  discountProduct:action.payload}
        
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
        
        case "HANDLE_REMOVE_COLOR":
          // devolve uma array sem o item com o indice especificado
          const filteredColors = state.colorsProduct.filter((color, index) => index != action.payload);
          
          if (state.colorsProduct[action.payload] === state.selectedColor){
            return { ...state, colorsProduct: filteredColors, selectedColor : null };
          }
          return { ...state, colorsProduct: filteredColors };
  
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