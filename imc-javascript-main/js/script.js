function calcular() {
  // alert("Função Calcular rodando!!");
  // Pegar os valores dos campos
  const nome = document.getElementById("nome").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  // Deixou de preencher um campo
  if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
    alert("Preencha todos os campos: Nome, Altura e Peso");
    return false;
  }

  const IMC = calcularImc(altura, peso);
  const textoSituacao = gerarTextoIMC(IMC);

  console.log(nome);
  console.log(altura);
  console.log(peso);
  console.log(IMC);
  console.log(textoSituacao);

  //   cadastrar a uma linha de tabela lá no html
  const objIMC = {
    nome: nome,
    altura: altura,
    peso: peso,
    IMC: IMC,
    textoSituacao: textoSituacao,
  };

  // chamar a função cadastrarNaAPI(objIMC)
  const retorno = cadastrarNaAPI(objIMC); //retorna true ou fase
  
  if (retorno) {
    buscarIMCs();//faz um get e coloca todo mundo no html (tabela)    
    
    // limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
    
    alert(`${nome} foi cadastrado no banco:
            Nome: ${nome}
            IMC: ${IMC}
            Situação: ${textoSituacao}`
    );

  } else {
    alert("Não foi possível cadastrar");
  }
} // fim função calcular

async function cadastrarNaAPI(objIMC) {
  //chamar o fecth e fazer um POST

  try {
    const resposta = await fetch("http://localhost:3000/imc", {
      method: "POST",
      body: JSON.stringify(objIMC),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// cadastrar na API
// let resposta = await fetch("http://localhost:3000/contatos",{
//     method: "POST",
//     body: JSON.stringify(objetoContato),
//     headers : {
//         "Content-Type" :  "application/json; charset=UTF-8"
//     }
// });

// Recebe altura e peso e retorna o imc calculado
function calcularImc(altura, peso) {
  return peso / (altura * altura);
}

// calcular o imc
// Menor que 16 – Magreza grave;

// 16 a menor que 17 – Magreza moderada;

// 17 a menor que 18,5 – Magreza leve;

// 18,5 a menor que 25 – Saudável;

// 25 a menor que 30 – Sobrepeso;

// 30 a menor que 35 – Obesidade Grau I;

// 35 a menor que 40 – Obesidade Grau II (considerada severa);

// Maior que 40 – Obesidade Grau III (considerada mórbida).
function gerarTextoIMC(IMC) {
  if (IMC < 16) {
    return "Magreza grave";
  } else if (IMC < 17) {
    return "Magreza leve";
  } else if (IMC < 18.5) {
    return "Magreza leve";
  } else if (IMC < 25) {
    return "Saudável";
  } else if (IMC < 30) {
    return "Sobrepeso";
  } else if (IMC < 35) {
    return "Obesidade Grau I";
  } else if (IMC < 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
} //fim da função

/**
 * Fazer um get
 * rodar um for com a lista que o get retornou
 * Inserir as linhas da tabela com os dados no html
 */
async function buscarIMCs() {
  try {
    const retorno = await fetch("http://localhost:3000/imc");
    const dadosRetornados = await retorno.json();
    
    console.log(dadosRetornados); //dados do cadastro

    // ordena pelo nome em ordem crescente
    dadosRetornados.sort( (a,b) => {
      return a.nome.localeCompare(b.nome);
    });

    //console.log(dadosRetornados); //dados do cadastro

    const tabela = document.getElementById("cadastro");
    let template = "";//variável auxiliar de texto - guarda várias linhas da tabela

    for (let i = 0; i < dadosRetornados.length; i++) {
      template += 
        `<tr>
            <td>${dadosRetornados[i].nome}</td>
            <td>${dadosRetornados[i].altura}</td>
            <td>${dadosRetornados[i].peso}</td>
            <td>${dadosRetornados[i].IMC.toFixed(2)}</td>
            <td>${dadosRetornados[i].textoSituacao}</td>
        </tr>`;
    }

    tabela.innerHTML = template; // só aciono o html uma vez, aqui
    
  } catch (error) {
    console.log(error);
  }
}
