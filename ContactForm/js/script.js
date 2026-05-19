async function cadastrarContato( objetoContato ) {
    console.log(objetoContato);
    
    // cadastrar na API
    let resposta = await fetch("http://localhost:3000/contatos",{
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers : {
            "Content-Type" :  "application/json; charset=UTF-8"
        }
    });
}

function validarFormulario() {
  let nome = document.getElementById("nome").value.trim(); //pega o valor do campo com id nome
  let sobrenome = document.getElementById("sobrenome").value.trim(); //pega o valor do campo com id nome
  // let email = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let telefone = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let sobrenome = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let sobrenome = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let sobrenome = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let sobrenome = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let sobrenome = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome
  // let sobrenome = document.getElementById("sobrenome").value.trim();//pega o valor do campo com id nome

  // valida o preenchimento do campo nome
  if (nome.length == 0) {
    //se o nome estiver vazio
    formError("nome");
  } else {
    reiniciaBorda("nome");
  }

  // valida o preenchimento do campo nome
  if (sobrenome.length == 0) {
    //se o nome estiver vazio
    formError("sobrenome");
  } else {
    reiniciaBorda("sobrenome");
  }

    // cadastrar lá na api
    //   gerar um objeto "literal" com os dados
  let objetoContato = {
    nome : nome,
    sobrenome: sobrenome
  };

  let cadastrado = cadastrarContato(objetoContato);
  return false;
} //fim da função

// função que pinta a borda do campo que falta preencher
function formError(fildId) {
  document.getElementById(fildId).style.border = "1px solid red";
}

// função que pinta a borda do campo que falta preencher
function reiniciaBorda(fildId) {
  document.getElementById(fildId).style.border = "none";
}
