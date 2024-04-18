import React, { createContext, useState, useContext } from "react";
import useAxios from "../hooks/useAxios";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserGlobal = createContext();

export const UserProvider = ({ children }) => {
  const { requisicao } = useAxios();
  const navegar = useNavigate();
  const [user, setUser] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_URL

  async function userLoginRequest(email, password)  {

    setLoading(true);
    
    try {
      // const response = await requisicao(
        //   "http://172.16.3.83:3333/funcionario/login",
        //   { email, senha: password },
        //   "POST",
      // );
      console.log(email)
      console.log(password)
      
      
      const response = await axios.post(`${BASE_URL}/funcionario/login`, {
        email: email,
        senha: password
      })
      console.log(response)


      if (response && response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setUser(response.data.NIF);
        localStorage.setItem('user', response.data.NIF);
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

  async function userLogoutRequest() {
    setLoading(true)

    try {
      const response = await axios.post(`${BASE_URL}/funcionario/deslogar`, null, {
        headers: {
          nif: user,
          token: token
        },
      })
      console.log(response)


      if (response && response.status === 200) {
        localStorage.removeItem('token');
        setUserLogin(false);
        navegar('/login')
        console.log('Logout deu certo.');
        return true;
      }
    } catch (error) {
      console.log('Logout falhou.');
        if (error.response && error.response.status === 400) {
        }
         else if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            console.log('Sistema logout falhou.');
            return false;
        }
    } finally {
      setLoading(false);
    }
    }

  return (
    <UserGlobal.Provider
      value={{ user, token, userLogin, setUserLogin, loading, error, userLoginRequest, userLogoutRequest }}
    >
      {children}
    </UserGlobal.Provider>
  );
}

