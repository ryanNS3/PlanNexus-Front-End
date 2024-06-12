import React, { useContext, useState, useCallback } from "react";
import useAxios from "../hooks/useAxios";
import { UserGlobal } from "./userContext";

export const ReservaContext = React.createContext();

export function ReservaProvider({ children }) {
  const { requisicao } = useAxios();
  const BASE_URL = import.meta.env.VITE_API_URL;
  const { token, user } = useContext(UserGlobal);
  const [reservas, setReservas] = useState([]);

  const GetAllReservas = useCallback(async () => {
    try {
      const res = await requisicao(
        `${BASE_URL}/reserva/todas`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );

      if (res && res.res.status === 200) {
        setReservas(res.res.data.response);
        return res.res.data.response;
      }
    } catch (error) {
      return false;
    }
  }, [token, user, requisicao, BASE_URL]);

  const GetReserva = useCallback(async (Id) => {
    try {
      const res = await requisicao(
        `${BASE_URL}/reserva/${Id}`,
        null,
        `GET`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );

      if (res && res.res.status === 200) {
        return res.res.data.response;
      }
    } catch (error) {
      return false;
    }
  }, [token, user, requisicao, BASE_URL]);

  const CancelarReserva = useCallback(async (id_reserva) => {
    try {
      const res = await requisicao(
        `${BASE_URL}/reserva/cancelar`,
        { id_reserva },
        `PATCH`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        await GetAllReservas();
        return true;
      }
    } catch (error) {
      return false;
    }
  }, [token, user, requisicao, BASE_URL, GetAllReservas]);

  const ConfirmarReserva = useCallback(async (id_reserva) => {
    try {
      const res = await requisicao(
        `${BASE_URL}/reserva/confirmar`,
        { id_reserva },
        `PATCH`,
        {
          authorization: `bearer ${token}`,
          nif: user,
        }
      );
      if (res && res.res.status === 200) {
        await GetAllReservas();
        return true;
      }
    } catch (error) {
      return false;
    }
  }, [token, user, requisicao, BASE_URL, GetAllReservas]);

  return (
    <ReservaContext.Provider
      value={{
        reservas,
        GetAllReservas,
        GetReserva,
        CancelarReserva,
        ConfirmarReserva,
      }}
    >
      {children}
    </ReservaContext.Provider>
  );
}
