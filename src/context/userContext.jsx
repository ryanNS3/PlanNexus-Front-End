import React, { createContext, useState, useContext } from "react";
import useAxios from "../hooks/useAxios";

export const UserGlobal = createContext();

export const UserProvider = ({ children }) => {
  const { requisicao } = useAxios();
  const [user, setUser] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState(null);

  const userLoginRequest = async ({email, password}) => {
    setLoading(true);
    try {
      const response = await requisicao(
        "http://172.16.3.83:3333/funcionario/login",
        { email, senha: password },
        "POST"
      );

      if (response && response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setUser(response.data.usuario);
        setUserLogin(true);
        return true;
      }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setError('Email ou senha inválidos. Tente novamente.');
        }
         else if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setUserLogin(false)
            setError(error.response.data.message || 'Erro durante o login. Por favor, tente novamente.');
            return false;
        }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserGlobal.Provider
      value={{ user, token, userLogin, setUserLogin, loading, error, userLoginRequest }}
    >
      {children}
    </UserGlobal.Provider>
  );
};

