import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/molecules/Sidebar";
import { Header } from "./components/atoms/headerElement";
import { StatisticCard } from "./components/StatisticCard"
import { Main } from "./components/pages/main";
import { LineTable } from "./components/LineTable";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path=":page" element={<StatisticCard />} />
        </Route>
      </Routes>
      <LineTable/>
    </>
  );
}

export default App;
