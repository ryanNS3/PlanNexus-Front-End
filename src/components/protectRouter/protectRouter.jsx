import { useContext } from 'react'
import { UserGlobal } from '../../context/userContext'
import { Navigate } from 'react-router-dom'

export const ProtectRouter = ({ children }) => {
  const { token } = useContext(UserGlobal); 
  console.log(token)
  return token ? children : <Navigate to="/login" />; 
}
