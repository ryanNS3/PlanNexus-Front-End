import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import {Header} from "./components/Header";
import {CardAccept} from "./components/Cards/cardAccept";
import { CardEvents } from "./components/Cards/cardEvents";
import {Home} from "../src/pages/Home";
import { Login } from "../src/pages/login";
import { LineTable } from "./components/LineTable";
import { Statistic } from "./components/Statistic";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":page" element={<Statistic />} />
        </Route>  
      </Routes>
      <Statistic />
    </>
  );
}

export default App;
