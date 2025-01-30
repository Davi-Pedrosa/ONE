// let titulo = document.querySelector('h1');
// titulo.innerHTML ='Jogo do número secreto!';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let tentativas = 1;
let listaNumeroSorteado = [];
let numeroAleatorio = gerarNumero();
exibirMensagemInicial();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ?'tentativas':'tentativa';
    if (chute == numeroAleatorio) {
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}! `);
        // Removendo atributo do botão, chamando pelo ID
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (chute > numeroAleatorio) {
            exibirTexto('p', 'Tente um número MENOR!');
        }
        else{
            exibirTexto('p', 'Tente um número MAIOR!');
        }
        limparCampo();
        tentativas++;
    } 
}

function limparCampo(params) {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    tentativas = 1;
    numeroAleatorio = gerarNumero();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    
    if (listaNumeroSorteado.length == 10) {
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumero();
    }
    else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}