

export function handleBlurEditing(event, nameDataEditing, setError){
    const { name, value } = event.target;
    value, setError, name 
    switch (nameDataEditing){
        case "nameProduct":
            dispatch({
                type: "HANDLE_BLUR_NAME",
                payload:{
                    name: name,
                    value: value,
                    setError: setError
                }
               })
        
        case "colorsProduct":
            dispatch({
                type: "HANDLE_BLUR_COLORS"
            })
        case "priceProduct":
            dispatch({
                type: "HANDLE_BLUR_PRICE",
                payload:{
                    name: name,
                    value: value,
                    setError: setError

                }
            })

        case "discountProduct":
            dispatch({
                type: "HANDLE_BLUR_DISCOUUNT",
                payload:{
                    name: name,
                    value: value,
                    setError: setError
                }
            })
    }
}