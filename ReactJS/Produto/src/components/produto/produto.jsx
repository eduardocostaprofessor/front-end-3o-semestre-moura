/*

Ivan
Arthur
Gomes
João
Paulo
Matheus

*/

import "./produto.css";
import { useEffect, useState } from "react";
import img from "../../assets/image.jpg";

export default function Produto() {
  // states e variáveis
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [imagem, setImagem] = useState(img);
  const [editar, setEditar] = useState(false);
  // lista de produtos na tela
  const [arrProdutos, setArrProdutos] = useState([]);

  // ciclos de vida e funções
  async function cadastrarProduto(e) {
    e.preventDefault(); //não deixa o formulário ser postado

    // alert("Função Cadastrar Chamada");
    // return false;

    // validar o formulário
    if (
      nome.trim().length == 0 ||
      descricao.trim().length == 0 ||
      isNaN(preco) ||
      isNaN(quantidade)
    ) {
      alert("Preencha os campos corretamente!");
      return false;
    }

    //gerar o objeto que vai pra api
    // object short sintaxe
    const objCadastro = {
      nome,
      descricao,
      preco,
      quantidade: quantidade,
      imagem: "image.jpg",
    };

    console.log(objCadastro);

    // cadastrar na api
    try {
      const retornoAPI = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        body: JSON.stringify(objCadastro),
        headers: {
          "Content-Type": "application/json; carset=UTF-8",
        },
      });

      console.log(retornoAPI);
      // validando o retorno da API
      if (retornoAPI.status == 201) {
        const dadosCadastrados = await retornoAPI.json();
        //console.log(dadosCadastrados);//dado que acabou de ser cadastrado
        setArrProdutos([...arrProdutos, dadosCadastrados]);
        alert("Produto cadastrado com sucesso");

        limparFormulario(); //limpar o formulário
      } else {
        alert("Problema inesperado");
      }
    } catch (error) {
      alert("Não foi possível salvar os dados");
      console.log(error);
    }
  }

  // Fubnção que reinicia os states pra limpar o formulário
  function limparFormulario() {
    setNome("");
    setDescricao("");
    setQuantidade(0);
    setPreco(0);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  async function getProdutos() {
    try {
      // faz requisição na api
      const retornoAPI = await fetch("http://localhost:3000/produtos");
      // transforma o retorno que é json em objeto javascript
      const dados = await retornoAPI.json();

      console.log(dados);
      // inserir os dados no state
      setArrProdutos(dados);
    } catch (error) {
      console.log("Erro ao buscar os produtos");
      console.log(error);
    }
  }

  async function deletar(id) {
    try {
      const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "delete",
      });

      if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
        alert("Produto apagado com sucesso");

        // gerar uma nova lista com os produtos que sobraram
        const novaLista = arrProdutos.filter((prod) => {
          return prod.id != id;
        });

        //atualiza a variável de produtos
        setArrProdutos(novaLista);
      } else {
        alert("Algum erro ocorreu ao apagar");
      }
    } catch (error) {
      alert("Erro ao apagar o produto");
      console.log(error);
    }
  }

  function editarProduto(e) {
    e.preventDefault();
    // alert("Função Editar Chamada");

    // fazer o put para editar os dados
    // chamar a função de getDados novamente para mostrar os dados atualizados
  }

  // desenho do componente na tela em si
  return (
    <>
      <header className="cabecalho">
        <h1 className="titulo--cinza">SENAI</h1>
        <h1 className="titulo--vermelho">LOJA</h1>
      </header>

      <form
        className="formzin"
        action=""
        onSubmit={editar ? editarProduto : cadastrarProduto}
      >
        {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
        <div className="input--dados">
          <input
            className="input--metade"
            type="text"
            id="nome"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            className="input--metade"
            type="number"
            id="preco"
            placeholder="Preço"
            value={preco}
            onChange={(e) => setPreco(parseFloat(e.target.value))}
          />
          <input
            className="input--metade"
            type="number"
            id="quantidade"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(parseInt(e.target.value))}
          />
          <input
            className="input--metade"
            type="text"
            id="descricao"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        {/* condicional para exibir o botão */}
        {editar && (
          <button
            type="button"
            className="btn--cadastro"
            onClick={() => {
              setEditar(false); // faz esconder o botão editar
              limparFormulario(); //reseta os states dos inputs
            }}
          >
            Cancelar
          </button>
        )}{" "}
        <button type="submit" className="btn--cadastro">
          Adicionar Produto
        </button>
      </form>

      <section className="produtos">
        {arrProdutos.map((prod) => (
          <div key={prod.id} className="produto">
            <h2 className="produtos__titulo">{prod.nome}</h2>
            <p className="produtos__descricao">
              Preço: R$ {prod.preco.toFixed(2)}
            </p>
            <p className="produtos__descricao">Descrição: {prod.descricao}</p>
            <p className="produtos__descricao">Quantidade: {prod.quantidade}</p>
            <img src={img} alt={prod.nome} />
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                deletar(prod.id);
              }}
            >
              Apagar
            </a>
            <button className="produtos__btn-comprar">Comprar</button>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                // mostrar dados no form pra edição

                setEditar(true); // faz mostrar o botão editar
                setNome(prod.nome);
                setDescricao(prod.descricao);
                setPreco(prod.preco);
                setQuantidade(prod.quantidade);
              }}
            >
              Editar
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
