import { Routes, Route } from "react-router-dom";
import "./App.css";
import { StatisticCard } from "./components/StatisticCard"
import { Home } from "./components/pages/Home";
import { LineTable } from "./components/LineTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index path="/" element={<StatisticCard title={"Associados"} situation={-5} value={327} />} />
          <Route index path=":page" element={<StatisticCard title={"Ganhos"} situation={16} value={327} />} />
        </Route>
      </Routes>
      <LineTable/>
    </>
  );
}

export default App;
