//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Por favor, digite um nome valido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!!!");
        return;
    }
    
    amigos.push(nome);
    
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
    
    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!!!");
        return;
    }
    
let sorteio = [...amigos];
let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoDisponivel = sorteio.filter(nome => nome !== amigos[i]);
        
        if (amigoDisponivel.length === 0) {
            alert("Não foi possível sortear sem que alguem tire a si mesmo. Tente novamente.");
            return;
        }
        
        let sorteado = amigoDisponivel[Math.floor(Math.random() * amigoDisponivel.length)];
        resultado.push(`${amigos[i]} → ${sorteado}`);
        sorteio.splice(sorteio.indexOf(sorteado), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(pares) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    pares.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        resultadoLista.appendChild(li);
    });
}