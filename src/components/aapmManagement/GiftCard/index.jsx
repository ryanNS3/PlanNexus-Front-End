import React, { useContext, useEffect, useState } from "react";
import {DonationIcon} from '../../../assets/Gestao/donationIcon'
import {RepeatIcon} from "../../../assets/Gestao/repeat"
import { CardMedium } from "../../Cards/Card";
import { ProductContext } from "../../../context/ProductContext";
import BasicModal from "../../Modal";
import { PinkButton } from "../../Buttons/pinkButton";


export function GiftCard(){
  const [isOpenDrop, setOpenDrop] = React.useState(false);
  const [modal, setModalOpen] = React.useState(false)
  const [gift, setGift] = React.useState(false)
  const  {GetGiftProduct, GetProducts, SwitchGift}  = React.useContext(ProductContext)
  const { resOneProduct } = GetGiftProduct()

    const handleOpenDropDown = () => {
        setOpenDrop(!isOpenDrop);
    };

    const handleMenuOne = () => {
        setGift()
    };

    const { resProductData } = GetProducts()

    const handleNewGift = async(productId) => {
    try {
      await SwitchGift.mutateAsync(productId)
    } catch (error) {
      console.log('erro ao ativar brinde: ', error)
    }
  }

    return(
        <div>
            <div className="mb-10 flex align-center" >
                <DonationIcon/> 
                <h4 className="text-sub1 text-cinza-950 mt-1 ml-2" >Brinde do semestre</h4>
            </div>
            { resOneProduct && resOneProduct.json.response.map((brindeAtivo, key) => {

              return(

                <div className="pt-4" >
                <div key={key} className="flex align-center mt-2 border-2 border-cinza-100 rounded-lg p-2 w-">
                    <img src={brindeAtivo.brinde ? brindeAtivo.foto : ''} className="w-14"/>
                    <p className="text-fun2 mt-2 ml-2" >{brindeAtivo.brinde ? brindeAtivo.nome : ''}</p> 

                </div>
                <Dropdown
                trigger={<button className="flex relative -top-[10rem] lg:-right-[15rem] md:-right-[16rem]" onClick={handleOpenDropDown}><RepeatIcon/></button>}
                open={open}
                menu={[
                  <button onClick={handleMenuOne} className="w-full flex align-center mb-6 border-2 border-cinza-100 rounded-lg p-2">
                        <img src={brindeAtivo.foto} className="w-14" />
                        <p className="text-fun2 mt-2 ml-2" >{brindeAtivo.nome}</p> 
                    </button>,

                    <BasicModal labelButton="Escolher novo brinde" isOpenModal={modal} setIsOpenModal={setModalOpen} TextButton="Novo brinde" >
                      {/* lista dos produtos */}
                      <div>
                      <h4 className="text-h4">Escolher novo brinde</h4>
                      {resOneProduct && resOneProduct.json.response.map((pd, key) => {
                          return(
                            <div>
                              <div>
                                
                                
                                  <img src={pd.foto} className='w-14'/>
                                  <p key={key} className="flex align-center gap-4"> {pd.nome} <p className="text-fun2 text-rosa-300">{pd.brinde ? 'brinde atual' : ''}</p> </p>
                                

                              </div>
                          </div>
                        )
                      })}
                      <PinkButton action={handleNewGift} text='Confirmar' typeButton='button' />
                      </div>
                      
                    </BasicModal>
                ]}
                /> 
            </div> 
              )
              })
            }
        </div>
    )
}

const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
        <div className="z-40 relative -bottom-[7rem] -left-[1rem]">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <CardMedium 
          children={
          <ul>
            <p className="text-fun2 mb-4" >selecione um produto</p>
          {menu.map((menuItem, index) => (
            <li key={index} >
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
        } 
        />
        ) : null}
      </div>
    );
  };



