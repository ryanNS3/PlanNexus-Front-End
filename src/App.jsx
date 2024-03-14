import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/molecules/Sidebar";
import Header from "./components/atoms/headerElement";
import { Main } from "./components/pages/main";
import { StatisticCard } from "./components/molecules/StatisticCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Main}>
          <Route path=":page" Component={StatisticCard} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
