import React from 'react'

const typeValidation = {
    email:{
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Email inválido",
    } 
};

// para consumir utilize : const nomeCampo = useInputValidate('tipo de validação')
export const useInputValidate = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function onChange({target}){
        if (error) validate(target.value)
        setValue(target.value)
        console.log(validate(value))
    
    }

    function validate(value){
        // if (value.length === 0) {
        //     setError("preencha campo")
        //     return false
        // }
        if (!typeValidation[type].regex.test(value)){
            console.log("deu errado")
            setError(typeValidation[type].message)
            return false
        }
        else{
            console.log("deu certo")
            setError(null)
            return true
        }
    }
 
    return{
        error,
        value,
        setValue,
        onChange,
        validate,
        onBlur: () => validate(value)
    }
}
