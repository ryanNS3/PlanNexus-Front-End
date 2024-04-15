import { useContext } from 'react';
import { UserGlobal } from '../../context/userContext';
import { Navigate } from 'react-router-dom';

export const ProtectRouter = ({ children }) => {
  const { token, user } = useContext(UserGlobal); 

  const response = requisicao(
        "http://172.16.3.83:3333/funcionario/token",
         null,
        "POST",
        { NIF: user.data.NIF, token: token}
      );
  return response && response.status === 200 ? children : <Navigate to="/login" />;

};
