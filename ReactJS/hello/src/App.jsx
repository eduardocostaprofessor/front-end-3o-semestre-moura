import "./App.css";
import Title from "./components/title/Title";
import Header from "./components/header/Header";
import Subtitle from "./components/subtitle/Subtitle";

function App() {
  return (
    <>
      <Title texto="O rato roeu o título da página" />
      <Subtitle texto="Minha página" />
      <Subtitle edu="bacana" texto="Minha página 2" />
    </>
  );
}

export default App;
