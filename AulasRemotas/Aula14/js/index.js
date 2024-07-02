var url = "../application/index.json";


const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')
const japones = document.getElementById('Japonês')
const portugues = document.getElementById('Português')
const frances = document.getElementById('Francês')
const espanhol = document.getElementById('Espanhol')
const ingles = document.getElementById('Inglês')


fetch(url) /* Request pro servidor */



    .then(response => response.json()) /*Ele manda uma resposta e tu converte pra json */

    .then(dados => { /*Salva ela na variavel */

        //nome.innerText = dados.Usuarios[i].nome;


        imprimirInformacoes(dados);


    });

function imprimirInformacoes(dados) {

    let principal = document.getElementById('principal')

    for (const usuario of dados.Usuarios) { // for (var i = 0; i < dados.Usuarios.length; i++) {

        // let principal = document.getElementById('principal')

        principal.innerHTML += `
                <hr>
                <h1> ${usuario.nome} </h1>
                <p> Idade: ${usuario.idade} anos </p>
                <p> CPF: ${usuario.cpf} </p>
                <p> Telefone: ${usuario.telefone} </p>
                <hr>
            `
    }

    let principal2 = document.getElementById('principal2');

    for (const [curso, alunos] of Object.entries(dados.Cursos[0])) { // for (var i = 0; i < dados.Usuarios.length; i++) {

        // let principal = document.getElementById('principal')

        principal2.innerHTML += `<h1>${curso}</h1>`;

        for (const aluno of alunos) {
            principal2.innerHTML += `<p>${aluno}</p>`;
        }

        principal2.innerHTML += `<hr>`;
    }
}


// document.getElementById("demo").innerHTML =
//     "Primeiro registro do array contém dados do <b>\"" + pessoas[0].nome + "\"</b> de <b>" + pessoas[0].local.cidade + "</b>";



// crtl + / == dividir tela do vscode;
// f12 na página html para abrir o console da página
// alt+l+o para abrir o live server
