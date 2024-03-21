import { useEffect, useState } from "react";
import axios from "axios";
import arrowUp from '../../../assets/header/arrow-up-right.svg';

export function CardAccept() {
    const [data, setData] = useState(null);
    const [responseSent, setResponseSent] = useState(false);

    // Mudar todas as rotas da api
    useEffect(() => {
        axios.get('https://apiurl')
            .then(response => setData(response.data))
            .catch(error => console.error("Erro:", error));
    }, []);

    // Será necessário um endpoint para enviar a resposta (confirmed / cancelled)
    const handleConfirm = () => {
        axios.post('https://apiurl/confirm', { confirmed: true }) 
            .then(() => setResponseSent(true))
            .catch(error => console.error("Erro ao confirmar:", error));
    };

    const handleCancel = () => {
        axios.post('https://apiurl/cancel', { cancelled: true })
            .then(() => setResponseSent(true))
            .catch(error => console.error("Erro ao cancelar:", error));
    };


    return (
        <div className="bg-cinza-50 border-2 border-cinza-200 rounded-lg hover:border-rosa-destaque w-7/12 sm:w-5/12 md:w-3/12 min-h-32 h-52 max-h-52">
            <div className="flex flex-row justify-between mt-4 ml-2">
                <p className="text-fun2 lg:text-sub2 py-2 px-2 text-cinza-950">{data ? data.title : "carregando"}</p>
                <img 
                    src={arrowUp} 
                    alt="Mais informações"
                    className="scale-90 lg:scale-100 lg:mt-1 ml-2 py-2 px-2" 
                />
            </div>
            
            <div className="ml-2 mt-20 mb-2">
                {responseSent ? (
                    <p className="bg-rosa-destaque rounded-lg text-cinza-50 px-2 py-1 w-72">Resposta enviada com sucesso</p>
                ) : (
                    <div className="flex flex-col sm:flex-row gap-2 items-center">
                        <button type="button" onClick={handleConfirm} className="bg-rosa-destaque hover:bg-rosa-300 hover:scale-105 transform transition duration-300 rounded-lg text-roxo-50 px-2 py-1 xl:px-4 text-ct3 md:text-fun2 lg:text-sub2 w-3/4 sm:w-auto">Confirmar</button>
                        <button type="button" onClick={handleCancel} className="bg-cinza-500 hover:bg-cinza-700 hover:scale-105 transform transition duration-300 rounded-lg  text-cinza-50 px-2 py-1 xl:px-4 text-ct3 md:text-fun2  lg:text-sub2 w-3/4 sm:w-auto">Cancelar</button>
                    </div>
                )}
            </div>
        </div> 
    );
}
