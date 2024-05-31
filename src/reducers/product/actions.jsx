export function handleBlurEditingAction(event, nameDataEditing, setError, dispatch) {
    const { name, value } = event.target;

    switch (nameDataEditing) {
        case "nameProduct":
            return dispatch({
                type: "HANDLE_BLUR_NAME",
                payload: {
                    name: name,
                    value: value,
                    setError: setError
                }
            });

        case "colorsProduct":
            return dispatch({
                type: "HANDLE_BLUR_COLORS"
            });

        case "priceProduct":
            return dispatch({
                type: "HANDLE_BLUR_PRICE",
                payload: {
                    name: name,
                    value: value,
                    setError: setError
                }
            });

        case "discountProduct":
            return dispatch({
                type: "HANDLE_BLUR_DISCOUNT",
                payload: {
                    name: name,
                    value: value,
                    setError: setError
                }
            });
        

        default:
            return;
    }
}

export function handleChangeEditingAction(event, nameDataEditing, payload, dispatch) {
    switch (nameDataEditing) {
        case "nameProduct":
            return dispatch({
                type: "HANDLE_CHANGE_NAME",
                payload: payload
            });

        case "colorsProduct":
            return dispatch({
                type: "HANDLE_CHANGE_COLOR",
                payload: payload
            });

        case "priceProduct":
            return dispatch({
                type: "HANDLE_CHANGE_PRICE",
                payload: payload
            });

        case "discountProduct":
            return dispatch({
                type: "HANDLE_CHANGE_DISCOUNT",
                payload: payload
            });

        case "descriptionProduct":
            return dispatch({
                type: "HANDLE_CHANGE_DESCRIPTION",
                payload: payload
            });

        case "sizeProduct":
            return dispatch({
                type: "HANDLE_CHANGE_SIZE",
                payload: payload
            });

        default:
            return;
    }
}
