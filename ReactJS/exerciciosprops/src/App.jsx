import "./App.css";
import Saudacao from "./components/exercicio01/saudacao";
import Produto from "./components/exercicio02/produto";
import Perfil from "./components/exercicio03/perfil";
import MyChildren from "./components/mychildren/mychildren";
import Produtos from "./components/produtos/Produtos";
import Title from "./components/title/title";

function App() {
  return (
    // <>

    //   <Title
    //     texto="Rafael"
    //     sobrenome="Moura"
    //   />

    //   <Title
    //     texto="Rafaela"
    //     sobrenome="Artico"
    //   />

    //   <Title
    //     texto="Kauã"
    //     sobrenome="Washington"
    //     idade={17}
    //   />

    // </>

    // Exercício 01
    // <>
    //   <Saudacao nome="Eduardo" />
    //   <Saudacao nome="Maria" />
    //   <Saudacao nome="Nicole" />
    // </>
    // <>
    
    //   <MyChildren>
    //     <p>O rato roeu a roupa e engasgou</p>
    //     <Produto
    //       nome="Tênis Nike"
    //       preco={597.98}
    //       descricao="Tênis bunito da Nike"
    //     />
    //     <Produto
    //       nome="Camiseta Polo"
    //       preco={79.98}
    //       descricao="Camiseta Polo do Edu"
    //     />
    //     <Produto
    //       nome="Garrafa Stanley"
    //       preco={255.0}
    //       descricao="Copo Stanley do Edu"
    //     />
    //   </MyChildren>

    //   <MyChildren>
    //     <Perfil nome="Eduardo Costa" idade={43} profissao="Desenvolvedor Web" />
    //   </MyChildren>

    // </>

    <Produtos />
  );
}

export default App;
