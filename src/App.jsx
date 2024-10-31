import "./App.css";
import "./index.css"
import { useEffect } from "react";
import { AcessibilityReporter } from "./utils/acessibility/Acessibility";
import { Router } from "./routes/Routes";



function App() {
  // useEffect(() =>{
  //  AcessibilityReporter()
  // },[])

  return (
    <div className=" bg-cinza-50">
      <Router />
    </div>
  );
}

export default App;
