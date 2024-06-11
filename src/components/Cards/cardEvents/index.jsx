import { useEffect, useState } from "react";
import axios from "axios";
import arrowUp from '../../../assets/header/arrow-up-right.svg';

export function CardEvents({ urgency }) {
    const [data, setData] = useState(null);

    urgency = true;

    useEffect(() => {
        axios.get('https://apiurl')
            .then(response => setData(response.data))
            .catch(error);
    }, []);

    return (
        <div className='relative bg-cinza-50 border-2 border-cinza-200 rounded-lg hover:border-rosa-destaque w-7/12 sm:w-5/12 md:w-3/12 min-h-32 h-52 max-h-52 mt-10'>

            {urgency && (
                    <div className="absolute text-fun2 lg:text-sub2 text-cinza-50 left-4 right-0 -top-6 bg-[#E95050] py-1 px-2 rounded-lg w-1/2 justify-center">
                    <p className="flex justify-center">Urgente</p>
                </div>
            )}
            
            <div className="bg-cinza-200 rounded-full"></div>

            <div className="flex flex-row justify-between mt-4 ml-2">
                <p className="text-fun2 lg:text-sub2 py-2 px-2 text-cinza-950">{data ? data.title : "carregando"}</p>
                <img 
                    src={arrowUp} 
                    alt="Mais informações"
                    className="scale-90 lg:scale-100 lg:mt-1 ml-2 py-2 px-2 cursor-pointer" 
                />
            </div>

            <div className="flex flex-row mt-20">
                <div className="bg-cinza-950 rounded-full m-4 h-4"></div>
                <p className="text-fun2 lg:text-sub2 text-cinza-950 ml-2">{data ? data.PersonName : "Marlene"}</p> 
            </div>
        </div> 
    );
}
