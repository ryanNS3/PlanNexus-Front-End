import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Statistic } from "../components/Statistic";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path=":page" element={<Statistic />}>
          <Route path=":period" />
        </Route>
      </Route>
    </Routes>
  );
}