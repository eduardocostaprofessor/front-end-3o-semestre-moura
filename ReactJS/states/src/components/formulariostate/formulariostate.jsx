import { useState } from "react"

function FormularioState() {
    
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")

    function pegarSobrenome(evento) {
        setSobrenome(evento.target.value)
    }

    return (
        <div>
            <h2>Formulário com State</h2>
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                placeholder="Digite seu nome" 
                onChange={(evento) => {
                    // evento = evento capturado/disparado, no caso o change
                    // target - elemento que disparou o evento, no caso o input
                    // value - oras, o value do input, no caso o valor digitado
                    setNome(evento.target.value)
                }}
            />
            <input 
                type="text"
                placeholder="Digite seu sobrenome"
                onChange={pegarSobrenome}
             />
            <br />
            <label htmlFor="">Texto Digitado: <strong>{nome} {sobrenome}</strong></label>
        </div>
    )
}

// fazer um segundo input para sobrenome com seu state
// no label, mostrar o nome e sobrenome

export default FormularioState