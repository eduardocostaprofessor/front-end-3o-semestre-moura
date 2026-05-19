// 03) Crie um componente chamado Perfil que receba:
// nome
// idade
// profissao
// O componente deve exibir os dados em formato de cartão.
import  "./perfil.css"
export default function Perfil({nome, idade, profissao}) {
    return (
        <div className="card-perfil">
            <p>
                <strong>Nome: </strong> {nome}
            </p>
            <p>
                <strong>Idade: </strong> {idade}
            </p>
            <p>
                <strong>Profissão: </strong> {profissao}
            </p>
        </div>
    )
}
