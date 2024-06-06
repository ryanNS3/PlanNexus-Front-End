import React, { useContext, useEffect, useState } from "react";
import {DonationIcon} from '../../../assets/Gestao/donationIcon'
import {RepeatIcon} from "../../../assets/Gestao/repeat"
import { ProductContext } from "../../../context/ProductContext";
import BasicModal from "../../Modal";
import { PinkButton } from "../../Buttons/pinkButton";
import { toastifyContext } from "../../../context/toastifyContext";


export function GiftCard({ activeGift }){
const [isOpenDrop, setOpenDrop] = React.useState(false);

const [gift, setGift] = React.useState(() => {
  return activeGift.json.response?.filter((product) => {product.brinde > 0 ?  product.brinde : null })
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
          

                <div className="pt-4" >
                  <div className="flex align-center justify-between mt-2 border-2 border-cinza-100 rounded-lg p-2">
                    {gift.length != 0 ?
                    <>
                      <img src={ gift[0].foto } className="max-w-18" />
                      <p className="text-fun2 my-auto ml-2" >{gift[0].nome}</p>  
                      <button className="flex my-auto mx-12" onClick={handleOpenDropDown}><RepeatIcon/></button>
                    
                    </>
                    :

                    <>
                    
                    <p>Nenhum brinde</p>
                    </>
                    }
                  </div>
                </div> 
          
        <DropDown isOpenDrop={isOpenDrop}/>
      </div>
  )
}

// ==============================================================================================================

const DropDown = ({isOpenDrop}) => {
  const [gift, setGift] = React.useState()
  const [modal, setModalOpen] = React.useState(false)
  const  {GetGiftProduct, SwitchGift}  = React.useContext(ProductContext)
  const { resOneProduct } = GetGiftProduct()

  const { Notification } = React.useContext(toastifyContext)

  const handleNewGift = (newGift) => {
    try {
      SwitchGift(newGift)
      setGift(newGift)
      Notification('success', 'BRINDE TROCADO COM SUCESSO')
      location.reload()
    } catch (error) {
      Notification("error", "troca falhou")
      console.log('erro ao ativar brinde: ', error)
    }
  }

return(
  <article className={`max-h-72 min-w-84 max-w-86 px-4 py-6 relative -left-[1rem] top-[2rem] border border-cinza-100 rounded-lg shadow-[0_4px_8px_0px_rgba(227,227,227)] bg-branco mt-10 ${isOpenDrop == false ? 'hidden' : 'block'}`}>

        <p className="text-fun2 mb-4" >selecione um produto</p>

                  <BasicModal labelButton="Escolher novo brinde" isOpenModal={modal} setIsOpenModal={setModalOpen} TextButton="Novo brinde" >

                    <h4 className="text-h4">Escolher novo brinde</h4>
        {resOneProduct && resOneProduct.json.response.map((product) => {
          return(
    
                    <button key={product.listIdProduto} value={gift} onClick={() => handleNewGift(product.listaIdProduto)}
                    className="flex items-center border border-cinza-100 rounded-lg my-4 mx-2 p-2 min-w-[30rem] max-w-[40rem] active:border-rosa-300 focus:none focus:border-rosa-300">

                        <img src={product.foto} className='w-14 mr-2 border border-cinza-100'/>
                        <p  className="flex align-center gap-4"> {product.nome} <p className="text-ct2 text-rosa-300 mt-1">{product.brinde ? 'brinde atual' : ''}</p> </p>

                    </button>

                  )
                })}
                  </BasicModal> 
        
    </article>
)
}

