// importar o caminho da imagem
import MyPeople from "../../assets/pessoa03.jpeg";
import "./cardperfil.css"

function CardPerfil() {
  return (
    <div className="card-perfil">
      <img
        className="card-perfil__image"
        src={MyPeople}
        alt="imagem do usuário"
      />
    </div>
  );
}

export default CardPerfil;
