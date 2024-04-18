import React from "react";

export const modalContext = React.createContext()


export function ModalProvider({children}){
    const [isOpenModal,setIsOpenModal] = React.useState(false)
    return(
        <modalContext.Provider value={{isOpenModal, setIsOpenModal}} >
            {children}
        </modalContext.Provider>
    )
}
