import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Statistic } from "../components/Statistic";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/estoque" element={<Home />}/>
      <Route path="/doacao" element={<Home />}/>
      <Route path="/financeiro" element={<Home />}/>
      <Route path="/calendario" element={<Home />}/>
      <Route path="/historico" element={<Home />}/>
      <Route path="/gestao" element={<Home />}/>

    </Routes>
  );
}