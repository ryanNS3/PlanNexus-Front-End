import { useContext } from 'react'
import { UserGlobal } from '../../context/userContext'
import { Navigate } from 'react-router-dom'

export const ProtectRouter = ({ children }) => {
  const { userLogin ,token } = useContext(UserGlobal); 
  
  return userLogin && token ? children : <Navigate to="/login" />; 
}
