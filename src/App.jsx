import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import {Header} from "./components/Header";
import {CardAccept} from "./components/Cards/cardAccept";
import { CardEvents } from "./components/Cards/cardEvents";
import {Home} from "../src/pages/Home";
import { Login } from "../src/pages/login";
import { LineTable } from "./components/LineTable";
import { NavBarGestao } from "./components/NavBarGestao";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}>
          <Route path=":page" Component={<></>} />
        </Route>
      </Routes>
      <NavBarGestao/>
    </>
  );
}

export default App;
