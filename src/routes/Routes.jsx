import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Statistic } from "../components/Statistic";
import { Management } from "../pages/Management";
import { Login } from "../pages/login";
import { UserProvider } from "../context/userContext";
import { ProtectRouter } from "../components/protectRouter/protectRouter";

export function Router() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estoque" element={<Home />}/>
        <Route path="/doacao" element={<Home />}/>
        <Route path="/financeiro" element={<Home />}/>
        <Route path="/calendario" element={
        <ProtectRouter>
          <Home />
        </ProtectRouter>
        }/>
        <Route path="/historico" element={<Home />}/>
        <Route path="/gestao" element={<Management />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/gestao/turmas" element={<Management/>}/>
        <Route path="/gestao/funcionarios" element={<Management/>}/>
        <Route path="/gestao/armarios" element={<Management/>}/>      
      </Routes>
    </UserProvider>
    
  );
}
