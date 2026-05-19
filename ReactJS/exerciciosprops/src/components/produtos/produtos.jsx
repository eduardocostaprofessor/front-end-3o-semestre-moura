import Produto from "../exercicio02/produto"
import "./produtos.css"

export default function Produtos() {
    const produtos = [
        {
            nome: "Tênis de marca",
            preco: 550,
            descricao : "Tênis chique!!"
        },
        {
            nome: "Camiseta de marca",
            preco: 270,
            descricao : "Camiseta chique e confortável!!"
        }
    ]

    return (
        produtos.map((produtinho) => {
            return (
                <Produto 
                    nome={produtinho.nome}
                    preco={produtinho.preco}
                    descricao={produtinho.descricao}
                />
            )
        })
    )
}