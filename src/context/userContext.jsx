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
  const [accessLevel, setAccessLevel] = useState(null);

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
          }
        } catch (error) {
          if (error.response && error.response.status >= 403 &&
            error.response.status <= 500) {
            navegar('/login');
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
        setTokenString(token);
        setUserString(NIF);
        let nivel_acesso = ''
        switch (response.json.response.nome_cargo) {
          case 'Administração':
              nivel_acesso = 3;
            break;
          case 'Diretoria':
              nivel_acesso = 2;
            break;
          case 'Conselho':
              nivel_acesso = 1;
            break;
        }
        setAccessLevel(nivel_acesso);
        setRawUserData(JSON.stringify({ NIF, nome, nome_cargo, email, foto }));
        return true;
      }
    } catch (error) {
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

      if (response && response.res.status === 200) {
        setTokenString(null);
        setUserString(null);
        setRawUserData(null);
        setAccessLevel(null);
        navegar("/login");
        return true;
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
      } else if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
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
        accessLevel,
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
