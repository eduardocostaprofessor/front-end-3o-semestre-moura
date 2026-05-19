// PRODUTO
// nome, descrição, preço, quantidade, imagem

import { useState } from "react";
import "./cadfruta.css";

export default function CadFruta() {
    // states
  const [fruta, setFruta] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  // array para o cadastro de frutas
  const [arrFrutas, setArrFrutas] = useState([
    { id: 1, nome: "Abacaxi", quantidade: 10 },
    { id: 2, nome: "Melão", quantidade: 12 },
  ]);

//   functions
  function cadastrar(e) {
    e.preventDefault(); //não deixa postar o formulário
    
    setArrFrutas([
        ...arrFrutas, 
        {
            id: Date.now(), 
            nome: fruta, 
            quantidade: quantidade
        }
    ]);

    setFruta("")
    setQuantidade(0)

  }//fim da função


//   function limparCampos() {
//     setFruta("")
//     setQuantidade(0)
//   }

  return (
    <section className="sessao-cadastro">
      <h2>Cadastro</h2>

      {/* Formulário de cadastro */}
      <form action="" onSubmit={cadastrar}>
        <fieldset className="cadastro">
          <label htmlFor="fruta" className="cadastro__rotulo">
            Digite o nome da fruta
          </label>
        </fieldset>
        <input
          type="text"
          id="fruta"
          value={fruta}
          placeholder="ex: limão"
          className="cadastro__entrada"
          onChange={(e) => {
            setFruta(e.target.value);
          }}
        />

        <input
          type="number"
          id="quantidade"
          value={quantidade}
          placeholder="Ex: 2"
          className="cadastro__entrada"
          onChange={(e) => {
            setQuantidade(e.target.value)
          }}
        />
        <button type="submit" className="cadastro__btncadastrar">
          Cadastrar
        </button>
      </form>

      {/* Listagem de dados */}
      <div className="resultados">
        <ul>
          {arrFrutas.map((f) => {
            return (
              <li key={f.id}>
                Fruta: <strong>{f.nome}</strong> | Quantidade: 
                <strong>{f.quantidade}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
