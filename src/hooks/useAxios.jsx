import axios from "axios";
import { useState } from "react";

const useAxios = () => {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(null);

  const requisicao = async (url, dados, metodo, headers) => {
    try {
      setErro(null);
      setLoading(true);
      const res = await axios({
        method: metodo,
        url: url,
        data: dados,
        headers: headers,
      });
      setDados(res.data);
      return { res, json: res.data };
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { dados, loading, erro, requisicao };
};

export default useAxios;
