let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole() {
    console.log('botão foi clicado');
}
function verificarAlert() {
    alert('Amo JS');
}
function verificarPrompt(params) {
    let cidade = prompt('Escreva uma cidade...');
    alert(`Estive em ${cidade} e lembrei de você`);
}
function verificarSoma(params) {
    let n1 = Number(prompt('Digite um número'));
    let n2 = Number(prompt('Digite outro número'));
    alert(`O resultado da soma é: ${n1+n2}`);
}