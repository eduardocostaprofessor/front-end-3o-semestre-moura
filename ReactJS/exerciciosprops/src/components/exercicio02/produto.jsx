// 02) Crie um componente chamado Produto que receba as seguintes props:
// nome
// preco
// descricao
// O componente deve exibir:
//    Nome do Produto
//    Preço: R$
//    Descrição do produto

// Crie pelo menos 3 produtos diferentes utilizando o componente.
import "./produto.css";
function Produto({ nome, preco, descricao }) {
  return (
    <p className="card-produto">
      <span className="card-produto__line">
        <strong>Nome do Produto:</strong> {nome} 
      </span>
      <span className="card-produto__line">
        <strong>Preço:</strong> R$ {preco.toFixed(2)} 
      </span>
      <span className="card-produto__line">
        <strong>Descrição do produto:</strong> {descricao}
      </span>
    </p>
  );
}

export default Produto;
