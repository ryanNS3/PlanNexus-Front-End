import React, { useEffect, useState } from "react";
import {DonationIcon} from '../../../assets/Gestao/donationIcon'
import {RepeatIcon} from "../../../assets/Gestao/repeat"
import { CardMedium } from "../../Cards/Card";
import { ProductContext } from "../../../context/ProductContext";
import BasicModal from "../../Modal";
import { useMutation } from "@tanstack/react-query";

const resOneProduct = [
  {
    "id": 1,
    "nome": "Produto A",
    "brinde": false
  },
  {
    "id": 2,
    "nome": "Produto B",
    "brinde": true
  },
  {
    "id": 3,
    "nome": "Produto C",
    "brinde": false
  }
]

export function GiftCard(){
  const [isOpenDrop, setOpenDrop] = React.useState(false);
  const [modal, setModalOpen] = React.useState(false)
  const [gift, setGift] = React.useState(false)
  const  {GetGiftProduct}  = React.useContext(ProductContext)
  // const { resOneProduct } = GetGiftProduct()

    const handleOpenDropDown = () => {
        setOpenDrop(!isOpenDrop);
    };

    const handleMenuOne = () => {
        setGift()
    };

    return(
        <div>
            <div className="mb-10 flex align-center" >
                <DonationIcon/> 
                <h4 className="text-sub1 text-cinza-950 mt-1 ml-2" >Brinde do semestre</h4>
            </div>
            { resOneProduct && 

              <div className="pt-4" >
                <div className="flex align-center mt-2 border-2 border-cinza-100 rounded-lg p-2 w-">
                    <img src={resOneProduct[0].foto} className="w-14"/>
                    <p className="text-fun2 mt-2 ml-2" >{resOneProduct[0].nome}</p> 

                </div>
                <Dropdown
                trigger={<button className="flex relative -top-[9rem] lg:-right-[15rem] md:-right-[16rem]" onClick={handleOpenDropDown}><RepeatIcon/></button>}
                open={open}
                menu={[
                  <button onClick={handleMenuOne} className="w-full flex align-center mb-6 border-2 border-cinza-100 rounded-lg p-2">
                        <img src={resOneProduct[1].foto} className="w-14" />
                        <p className="text-fun2 mt-2 ml-2" >{resOneProduct[1].nome}</p> 
                    </button>,
                    <BasicModal labelButton="Escolher novo brinde" isOpenModal={modal} setIsOpenModal={setModalOpen} TextButton="Novo brinde" >
                      {/* lista dos produtos */}
                      <GiftList/>
                    </BasicModal>
                ]}
                /> 
            </div> 
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



  const GiftList = () => {
    const  {GetGiftProduct, SwitchGift}  = React.useContext(ProductContext)
    // const { resOneProduct } = GetGiftProduct()

    // const handleNewGift = async(productId) => {
    //   try {
    //     await SwitchGift.mutateAsync(productId)
    //   } catch (error) {
    //     console.log('erro ao ativar brinde: ', error)
    //   }
    // }
    
    {resOneProduct && resOneProduct.map(() => {
          return(
          <p key={resOneProduct.id} > {resOneProduct.nome} - {resOneProduct.brinde ? 'brinde atual' : ''} </p>
          )
        })}
    
  }
