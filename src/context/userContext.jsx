import React, { createContext, useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useCookies } from '../hooks/useCookies';

export const UserGlobal = createContext();

export const UserProvider = ({ children }) => {
  const { requisicao } = useAxios();
  const [rawUserData, setRawUserData] = useCookies("userData", null);
  const [userString, setUserString] = useCookies("user", null);
  const user = userString === "null" ? null : userString;
  const [tokenString, setTokenString] = useCookies("token", null);
  const token = tokenString === "null" ? null : tokenString;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userLogin = useMemo(() => !!user && !!token, [user, token]);

  const navegar = useNavigate();
  const url = useLocation();

  const BASE_URL = import.meta.env.VITE_API_URL;

  const userData = useMemo(() => {
    try {
      return rawUserData ? JSON.parse(rawUserData) : null;
    } catch (e) {
      console.error("Failed to parse user data:", e);
      return null;
    }
  }, [rawUserData]);

  useEffect(() => {
    async function validateToken() {
      if (!!token && !!user) {
        setLoading(true);
        try {
          const response = await requisicao(
            `${BASE_URL}/funcionario/token`,
            null,
            'POST',
            {
              nif: user,
              authorization: `bearer ${token}`,
            }
          );

          if (response && response.res.status === 200) {
            if (url.pathname === '/login') {
              navegar('/');
            }
            console.log("Token validado");
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            console.log("Sem token / token inválido.");
            navegar('/login');
          } else if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            console.log("Sistema validação falhou.");
          }
        } finally {
          setLoading(false);
        }
      }
    }

    validateToken();
  }, [token, user]);

  async function userLoginRequest(email, password) {
    setLoading(true);
    try {
      const response = await requisicao(
        `${BASE_URL}/funcionario/login`,
        { email: email, senha: password },
        'POST',
        null
      );

      if (response && response.res.status === 200) {
        const { token, NIF, nome, nome_cargo, email, foto } = response.json.response;
        setToken(token);
        setUser(NIF);
        setRawUserData(JSON.stringify({ NIF, nome, nome_cargo, email, foto }));
        return true;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setError("Email ou senha inválidos. Tente novamente.");
      } else if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(
          error.response.data.message ||
            "Erro durante o login. Por favor, tente novamente."
        );
        return false;
      }
    } finally {
      setLoading(false);
    }
  }

  async function userLogoutRequest() {
    setLoading(true);
    try {
      const response = await requisicao(
        `${BASE_URL}/funcionario/deslogar`,
        null,
        'POST',
        {
          nif: user,
          authorization: `bearer ${token}`,
        }
      );
      console.log(response);

      if (response && response.res.status === 200) {
        setToken(null);
        setUser(null);
        setRawUserData(null);
        navegar("/login");
        console.log("Logout deu certo.");
        return true;
      }
    } catch (error) {
      console.log("Logout falhou.");
      if (error.response && error.response.status === 400) {
      } else if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        console.log("Sistema logout falhou.");
        return false;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserGlobal.Provider
      value={{
        user,
        userData,
        token,
        userLogin,
        loading,
        error,
        userLoginRequest,
        userLogoutRequest,
      }}
    >
      {children}
    </UserGlobal.Provider>
  );
};
