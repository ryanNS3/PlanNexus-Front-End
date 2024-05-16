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
          if (colorsChange[action.payload.id] === state.selectedColor){
            return {...state, selectedColor: colorsChange }
          }
          colorsChange[action.payload.id] = action.payload.value;
          return {...state , colorsProduct : colorsChange}
  
        case "HANDLE_ADD_COLOR":
          const newAddColor = [...state.colorsProduct, `cor${state.colorsProduct.length}`]
          return {...state, colorsProduct : newAddColor}
        
        case "HANDLE_REMOVE_COLOR":
          const filteredColors = state.colorsProduct.filter((color, index) => index != action.payload);
          return { ...state, colorsProduct: filteredColors };
  
        case "HANDLE_SELECTED_COLOR":
          return {...state, selectedColor : action.payload }

        case "ON_DROP_IMAGE":
          let files = [...state.image];
          files[action.payload.index].push({[state.selectedColor] : action.payload.file})
          return {...state , image : files}
        case "ON_REMOVE_IMAGE":
          return {}

        default:{
          return state
        }
      }
}