import React from "react"
import useAxios from "../hooks/useAxios"

const EmployeeContext = React.createContext()

export function EmployeeProvider({children}) {
    const {requisicao} = useAxios();
    const [EmployeeData, setEmployeeData] = React.useState(null)

    const GetEmployee = React.useCallback(async()=>{
        try{
            const res = await requisicao(
              `${BASE_URL}/funcionario/todos`,
              null,
              `GET`,
              {
                token: token,
                nif: user,
              }
            );
            setEmployeeData(dados);
          }
          
        catch(err){
            console.log(err)
        }

    })


    async function PutEmployee(){
        

    }

    
        return <EmployeeContext.Provider value={{GetEmployee}}>{children}</EmployeeContext.Provider>

    }
    




