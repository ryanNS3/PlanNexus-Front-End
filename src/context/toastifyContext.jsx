import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const toastifyContext = React.createContext();

export function ToastifyProvider({children}){
    
   
    function Notification(type, message){
        switch (type){
            case "sucess":
                toast.success(message,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                    })
                    break

            case "loading":
                toast.loading(message,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                })
                break
                
            case "error":
                toast.error(message,{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    
                })
                break    
        }
    }
   

    return(
        <toastifyContext.Provider value={{Notification}}>
            {children}
        </toastifyContext.Provider>
    )
}