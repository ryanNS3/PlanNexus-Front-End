import React, { useContext, useEffect, useState } from "react";
import {DonationIcon} from '../../../assets/Gestao/donationIcon'
import {RepeatIcon} from "../../../assets/Gestao/repeat"
import { CardMedium } from "../../Cards/Card";
import { ProductContext } from "../../../context/ProductContext";
import BasicModal from "../../Modal";
import { PinkButton } from "../../Buttons/pinkButton";


export function GiftCard(activeGift){
const [isOpenDrop, setOpenDrop] = React.useState(false);
const  {GetGiftProduct, SwitchGift}  = React.useContext(ProductContext)
const { resOneProduct } = GetGiftProduct()

const [gift, setGift] = React.useState(() => {
  activeGift.map(() => {return activeGift.brinde})  
})


  const handleOpenDropDown = () => {
      setOpenDrop( prevState => !prevState );
  };

  return(
      <div>
          <div className="mb-10 flex align-center" >
              <DonationIcon/> 
              <h4 className="text-sub1 text-cinza-950 mt-1 ml-2" >Brinde do semestre</h4>
          </div>
          { gift && 
              
              <div className="pt-4" >
                <div className="flex align-center justify-between mt-2 border-2 border-cinza-100 rounded-lg p-2 max-h-16">
                  <img src={gift.foto} className="w-14"/>
                  <p className="text-fun2 my-auto" >{gift.nome}</p> 
                  <button className="flex my-auto mx-12" onClick={handleOpenDropDown}><RepeatIcon/></button>

                </div>
            </div> 

          }
        <DropDown isOpenDrop={isOpenDrop}/>
      </div>
  )
}

// ==============================================================================================================

const DropDown = ({isOpenDrop}) => {
  const [gift, setGift] = React.useState()
  const [modal, setModalOpen] = React.useState(false)
  const  {GetGiftProduct, GetProducts, SwitchGift}  = React.useContext(ProductContext)
  const { resOneProduct } = GetGiftProduct()

  const handleNewGift = () => {
    try {
      SwitchGift(setGift())
    } catch (error) {
      console.log('erro ao ativar brinde: ', error)
    }
  }

return(
  <article className={`max-h-72 min-w-84 max-w-86 px-4 py-6 relative -left-[1rem] top-[2rem] border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)] bg-branco  ${isOpenDrop == false ? 'hidden' : 'block'}`}>

        <p className="text-fun2 mb-4" >selecione um produto</p>

                  <BasicModal labelButton="Escolher novo brinde" isOpenModal={modal} setIsOpenModal={setModalOpen} TextButton="Novo brinde" >

                    <h4 className="text-h4">Escolher novo brinde</h4>
        {resOneProduct && resOneProduct.json.response.map((product, key) => {
          return(
    
                    <button key={key} value={gift}
                    className="flex items-center border border-cinza-100 rounded-lg my-4 mx-2 p-2 w-84 active:border-rosa-300 focus:none focus:border-rosa-300">

                        <img src={product.foto} className='w-14 mr-2'/>
                        <p  className="flex align-center gap-4"> {product.nome} <p className="text-ct2 text-rosa-300 mt-1">{product.brinde ? 'brinde atual' : ''}</p> </p>

                  </button>

                  )
                })}
                <div className="fixed bottom-[1rem] mt-4 bg-branco">
                <PinkButton action={handleNewGift} text='Confirmar' typeButton='button' />
                </div>
                  </BasicModal> 
        
    
    </article>
)
}





