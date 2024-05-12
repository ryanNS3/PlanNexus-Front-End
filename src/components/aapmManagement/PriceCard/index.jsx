import {SubscriptionIcon} from "../../../assets/Gestao/subscriptionIcon"
import {EditIcon} from "../../../assets/Gestao/edit"
import { useState } from "react";

export function PriceCard(){

    return(
        <div>
            <div className="mb-10 flex align-center" >
                <SubscriptionIcon className="mr-2" /> 
                <h4 className="text-sub1 text-cinza-950 mt-1 ml-2" >Valor da assinatura</h4>
            </div>
            <div className="flex align-center gap-2" >
                <EditButton/>
            </div> 
            <p className="text-corpo-texto3 mt-2" >Válido até 01/01</p>
        </div>
    )
}

function EditButton() {
    const [edit, setEdit] = useState(false);
    const [InputValue, setInputValue] = useState('90');
  
    const handleClick = () => {
      setEdit(true);
    };
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleInputBlur = () => {
      setEdit(false);
    };
  
    return (
      <div  className="flex align-center gap-2">
          <p className="text-h5">R${InputValue}</p>
        {edit ? (
          <input
            className="w-2/4 h-10 self-center ml-5 px-2 rounded-lg border-2 focus:outline-none focus:border-rosa-destaque focus:shadow-outline text-fun2 text-cinza-500"
            type="number"
            value={InputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus // Para focar automaticamente no input ao renderizar
          />
        ) : (
          <button onClick={handleClick}><EditIcon/></button>
        )}
      </div>
    );
  }