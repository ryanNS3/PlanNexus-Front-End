import "./App.css";
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
