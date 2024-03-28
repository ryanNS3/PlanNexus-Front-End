import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { CardAccept } from "./components/Cards/cardAccept";
import { CardEvents } from "./components/Cards/cardEvents";
import { Home } from "../src/pages/Home";
import { Login } from "../src/pages/login";
import { LineTable } from "./components/LineTable";
import { NavBarGestao } from "./components/NavBarGestao";
import { Statistic } from "./components/Statistic";
import { useEffect } from "react";
import { AcessibilityReporter } from "./utils/acessibility/Acessibility";
import { Router } from "./routes/Routes";

function App() {
  useEffect(() =>{
   AcessibilityReporter()
  },[])

  return (
    <>
      <Router />
    </>
  );
}

export default App;
