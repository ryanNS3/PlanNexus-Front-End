import React from 'react';
import Cookies from 'js-cookie';


export const useCookies = (key, newValue, newTime) => {
    const localValue = Cookies.get(key)
    const [value, setValue] = React.useState(() =>{
        return localValue ? localValue : newValue
    })

    React.useEffect(() =>{
        Cookies.set(key, newValue, newTime )
    },[])

    return [value, setValue]
}
