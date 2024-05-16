import React, { useState } from "react";
import {DonationIcon} from '../../../assets/Gestao/donationIcon'
import {RepeatIcon} from "../../../assets/Gestao/repeat"
import { CardMedium } from "../../Cards/Card";

export function GiftCard(){
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("Camiseta")
  

    const handleOpenDropDown = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        setName('Caneca')
    };
    
    const handleMenuTwo = () => {
        setName('abrir modal')
    };

    return(
        <div>
            <div className="mb-10 flex align-center" >
                <DonationIcon/> 
                <h4 className="text-sub1 text-cinza-950 mt-1 ml-2" >Brinde do semestre</h4>
            </div>
            <div className="pt-4" >
                <div className="flex align-center mt-2">
                    <img src="..\src\assets\Gestao\shirtpng.png" />
                    <p className="text-fun2 mt-2 ml-2" >{name}</p> 

                </div>
                <Dropdown
                trigger={<button className="relative -top-[9rem] lg:-right-[18rem] md:-right-[12rem]" onClick={handleOpenDropDown}><RepeatIcon/></button>}
                open={open}
                menu={[
                    <button onClick={handleMenuOne} className="w-full flex align-center mb-6 border-2 border-cinza-100 rounded-lg p-2">
                        <img src="src\assets\Gestao\shirtpng.png" />
                        <p className="text-fun2 mt-2 ml-2" >Caneca</p> 
                    </button>,
                    <button onClick={handleMenuTwo} className="w-full flex align-center border-2 mb-6 border-cinza-100 rounded-lg p-2">
                        <p className="text-fun2 my-2 ml-2">Adicionar novo produto</p> 
                    </button>,
                ]}
                /> 
            </div> 
        </div>
    )
}

const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
        <div className="z-40 relative -bottom-[7rem]">
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
