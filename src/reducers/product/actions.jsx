export function handleBlurEditingAction(nameDataEditing, payload, dispatch) {

    switch (nameDataEditing) {
        case "nameProduct":
            return dispatch({
                type: "HANDLE_BLUR_NAME",
                ...payload
            });

        case "colorsProduct":
            return dispatch({
                type: "HANDLE_BLUR_COLORS"
            });

        case "priceProduct":
            return dispatch({
                type: "HANDLE_BLUR_PRICE",
                ...payload
            });

        case "discountProduct":
            return dispatch({
                type: "HANDLE_BLUR_DISCOUUNT",
                ...payload
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
                ...payload
            });

        case "colorsProduct":
            return dispatch({
                type: "HANDLE_CHANGE_COLOR",
                ...payload
            });

        case "priceProduct":
            return dispatch({
                type: "HANDLE_CHANGE_PRICE",
                ...payload
            });

        case "discountProduct":
            return dispatch({
                type: "HANDLE_CHANGE_DISCOUNT",
                ...payload
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
