import { useState } from "react";
import "./App.css";
import Contador from "./components/contador/contador";
import FormularioState from "./components/formulariostate/formulariostate";
import CadFruta from "./components/cadfruta/cadfruta";

function App() {
  // Variável privada (objeto) só pode ser mudada pela função setTitulo
  const [titulo, setTitulo] = useState("Google");

  function mudarTexto() {
    setTitulo("Microsoft")
    
  }
  function mudarTexto2() {
    setTitulo("Adenicon")
    
  }

  return (
    <>
      {/* <h1>Minha Página de {titulo}</h1>
      <button onClick={mudarTexto}>Mudar Texto</button> 
      <br />
      <button onClick={mudarTexto2}>Adenicon</button>

      <Contador />
      <br />
      <FormularioState /> */}
      
      <CadFruta />
    </>
  );
}

export default App;
