import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Management } from "../pages/Management";
import { Login } from "../pages/login";
import { UserProvider } from "../context/userContext";
import { ProtectRouter } from "../components/protectRouter/protectRouter";

export function Router() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={
          <ProtectRouter>
            <Home />
          </ProtectRouter>
        }/>
        <Route path="/estoque" element={
          <ProtectRouter>
            <Home />
          </ProtectRouter>
        }/>

        <Route path="/doacao" element={
          <ProtectRouter>
            <Home />
          </ProtectRouter>
        }/>

        <Route path="/financeiro" element={
          <ProtectRouter>
            <Home />
          </ProtectRouter>
        }/>

        <Route path="/calendario" element={
          <ProtectRouter>
            <Home />
          </ProtectRouter>
        }/>

        <Route path="/historico" element={
          <ProtectRouter>
            <Home />
          </ProtectRouter>
        }/>

        <Route path="/gestao" element={
          <ProtectRouter>
            <Management />
          </ProtectRouter>
        }/>

      </Routes>
    </UserProvider>
    
  );
}
