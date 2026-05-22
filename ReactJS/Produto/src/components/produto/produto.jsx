import { useEffect, useState } from "react";
import img from "../../assets/image.jpg";
import api from "../../services/services";

import "./produto.css";


export default function Produto() {
  
  // states e variáveis
  const [id, setId] = useState(0); // usado no editar
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [imagem, setImagem] = useState(img);
  const [editar, setEditar] = useState(false);
  // lista de produtos na tela
  const [arrProdutos, setArrProdutos] = useState([]);

  // ciclos de vida e funções
  useEffect(() => {
    getProdutos();
  }, []);


   async function getProdutos() {
    try {
      // faz requisição na api
      const retornoAPI = await api.get("/produtos")
      // transforma o retorno que é json em objeto javascript
      const dados = await retornoAPI.data

      // console.log(dados);
      // inserir os dados no state
      setArrProdutos(dados);
    } catch (error) {
      console.log("Erro ao buscar os produtos");
      console.log(error);
    }
  }
  
  async function cadastrarProduto(e) {
    e.preventDefault(); //não deixa o formulário ser postado

    // alert("Função Cadastrar Chamada");
    // return false;

    // validar o formulário
    if (
      nome.trim().length == 0 ||
      descricao.trim().length == 0 ||
      isNaN(preco) ||
      preco <= 0 ||
      isNaN(quantidade) ||
      quantidade <= 0
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
    }

    console.log(objCadastro);

    // cadastrar na api
    try {
      const retornoAPI = await api.post("/produtos", objCadastro)

      console.log(retornoAPI);
      // validando o retorno da API
      if (retornoAPI.status == 201) {
        const dadosCadastrados = await retornoAPI.data
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

   async function editarProduto(e) {
    e.preventDefault(); //Evita de postar o formulário

    // validar o formulário se está tudo preenchido
    if (
      nome.trim().length == 0 ||
      descricao.trim().length == 0 ||
      isNaN(preco) ||
      preco <= 0 ||
      isNaN(quantidade) ||
      quantidade <= 0
    ) {
      alert("Preencha os campos corretamente!");
      return false;
    }

    //gerar o objeto que vai pra api
    const objCadastro = {
      nome,
      descricao,
      preco,
      quantidade: quantidade,
      imagem: "image.jpg",
    };

    // chamar a api
    try {
      const retornoAPI = await axios.put(`/produtos/${id}`, objCadastro);

      if (retornoAPI.status == 200) {
        alert("Produto alterado com sucesso");
        getProdutos(); // listar os dados
        limparFormulario(); // limpar o form
        setEditar(false);
      } else {
        alert("Erro ao editar");
      }
    } catch (error) {
      alert("Erro ao editar o produto");
      console.log(error);
    }
  } //fim da função editarProduto

 async function deletar(id) {

      if(!confirm("Você quer realmente apagar o produto?")) {
        return false;
      }

    try {
      const retornoAPI = await api.delete(`/produtos/${id}`);

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

  // Função que reinicia os states pra limpar o formulário
  function limparFormulario() {
    setId(0);
    setNome("");
    setDescricao("");
    setQuantidade(0);
    setPreco(0);
  }

  
  // desenho do componente na tela em si JSX
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
              setId(0);
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
                setId(prod.id);
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

}//fim do componente Produto
