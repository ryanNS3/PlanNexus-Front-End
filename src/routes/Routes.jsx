import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Statistic } from "../components/Statistic";
import { Management } from "../pages/Management";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estoque" element={<Home />}/>
      <Route path="/doacao" element={<Home />}/>
      <Route path="/financeiro" element={<Home />}/>
      <Route path="/historico" element={<Home />}/>
      <Route path="/gestao" element={<Management />}/>

      <Route path="/gestao/turmas" element={<Management/>}/>
      <Route path="/gestao/funcionarios" element={<Management/>}/>
    </Routes>
  );
}