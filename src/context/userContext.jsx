import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const UserGlobal = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(null);
  const userLogin = useMemo(() => !!user, [user]);

  const navegar = useNavigate();
  const url = useLocation()

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function validateToken() {
      if (!!token && !!user) {
        setLoading(true);
        try {
          const response = await axios.post(
            `${BASE_URL}/funcionario/token`,
            null,
            {
              headers: {
                nif: user,
                token: token,
              },
            }
          );

          if (response && response.status === 200) {
            url.pathname === '/login' ? navegar('/') : null
            console.log("Token validado");
          }
        } catch (error) {
          if (error.response && error.response.status === 403) {
            console.log("Sem token / token inválido.");
            navegar('/login')
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
  }, [token]);

  async function userLoginRequest(email, password) {
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/funcionario/login`, {
        email: email,
        senha: password,
      });

      if (response && response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setUser(response.data.NIF);
        localStorage.setItem("user", response.data.NIF);
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
      const response = await axios.post(
        `${BASE_URL}/funcionario/deslogar`,
        null,
        {
          headers: {
            nif: user,
            token: token,
          },
        }
      );

      if (response && response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
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
