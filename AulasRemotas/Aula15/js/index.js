$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

var url = "./json/index.json";

const nome = $("#nome")
const idade = $("#idade")
const cpf = $("#cpf")
const telefone = $("#telefone")
fetch(url) /* Request pro servidor */
    .then(response => response.json()) /*Ele manda uma resposta e tu converte pra json */
    .then(dados => { /*Salva ela na variavel */

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
}

$(document).ready(function() { // $(document).ready(), para garantir que esteja completamente carregado antes de tentar anexar o validador ao formulário
    $("#formValidation").validate({
        rules: {
            nome: {
                minlength: 2
            },
            email: {
                email: true
            },
            areaMensagem: {
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
                minlength: "Necessario ao menos 2 caracteres"
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Necessario um email válido"
            },
            areaMensagem: {
                required: "Por favor, insira sua mensagem",
                minlength: "Necessario ao menos 10 caracteres"
            }
        },
    
        submitHandler: function (form) {
            form.submit();
        }
    });
});