let listaAmigos = [];
const inputName = document.getElementById('inputName');
const exibirLista = document.getElementById('lista');

function adicionar() {
    const nomeAmigo = inputName.value;

    if (nomeAmigo.trim() != "" && isNaN(nomeAmigo)) {

        listaAmigos.push(nomeAmigo);

        const item = document.createElement('li');
        item.textContent = nomeAmigo;

        exibirLista.appendChild(item);

        inputName.value = "";
    }
    else {
        alert("Digite novamente!!");
        inputName.value = "";
    }
}

function mensagem(texto, tag, color, callback) {
    let mensagemContainer = document.getElementById('mensagem');
    let overlaySection = document.getElementById('overlay');

    // Limpar qualquer mensagem anterior
    mensagemContainer.innerHTML = '';

    // Criar o elemento da mensagem
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    elemento.style.color = color;
    elemento.style.textAlign = 'center';

    // Criar o botão "OK"
    const botaoOK = document.createElement('button');
    botaoOK.textContent = 'OK';
    botaoOK.style.marginTop = '10px';
    botaoOK.style.padding = '8px 15px';
    botaoOK.style.backgroundColor = '#4CAF50';
    botaoOK.style.color = 'white';
    botaoOK.style.border = 'none';
    botaoOK.style.cursor = 'pointer';

    // Adicionar a mensagem e o botão "OK" ao container
    mensagemContainer.appendChild(elemento);
    mensagemContainer.appendChild(botaoOK);

    // Exibir a mensagem e o overlay
    mensagemContainer.style.display = 'block';
    overlaySection.style.display = 'block';

    // Quando o botão "OK" for clicado, a mensagem será fechada
    botaoOK.onclick = function () {
        // Fechar a mensagem
        mensagemContainer.style.display = 'none';
        overlaySection.style.display = 'none';

        // Se uma função de callback for fornecida, a ação será executada
        if (callback) {
            callback();
        }
    };
}

function cancelar() {
    mensagem('Realmente deseja cancelar?', 'h3', '#252525', function confirm() {
        inputName.value = "";
    });
}


function sortear() {
    exibirLista.innerHTML = '';


    if (listaAmigos.length == 0) {
        mensagem('Insira um Nome à Lista.', 'h3', '#252525', function confirm() { })
        return;
    }
    else {
        const carregando = document.createElement('h3');
        carregando.textContent = 'Espere um Momento...';
        carregando.style.color = '#c8c8c8'
        exibirLista.appendChild(carregando);
        setTimeout(() => {
            exibirLista.innerHTML = '';
            let nomeSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
            const resultado = document.createElement('h4');
            resultado.textContent = `O Nome sorteado foi: ${nomeSorteado}`;
            exibirLista.appendChild(resultado);
        }, 3000);
    }
}
