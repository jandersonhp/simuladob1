// ===== SIMULADO 2 — LOGICA =====

var escolhas = {};
var verificados = {};

function sel(idLista, el, valor) {
    if (verificados[idLista]) return;

    var itens = document.getElementById(idLista).querySelectorAll("li");
    for (var i = 0; i < itens.length; i++) {
        itens[i].classList.remove("selecionado");
        var r = itens[i].querySelector("input[type='radio']");
        if (r) r.checked = false;
    }
    el.classList.add("selecionado");
    escolhas[idLista] = valor;
    var radio = el.querySelector("input[type='radio']");
    if (radio) radio.checked = true;
}

function verificar(num, correta) {
    var opId = "op" + num;
    var resId = "res" + num;
    var res = document.getElementById(resId);

    if (verificados[opId]) return;
    verificados[opId] = true;

    var resposta = escolhas[opId];
    var itens = document.getElementById(opId).querySelectorAll("li");
    var ci = correta.charCodeAt(0) - 97;
    itens[ci].classList.add("certa");

    if (!resposta) {
        res.textContent = "Voce nao marcou nenhuma alternativa!";
        res.className = "resultado erro";
    } else if (resposta === correta) {
        res.textContent = "Acertou!";
        res.className = "resultado acerto";
    } else {
        res.textContent = "Errou! Voce marcou '" + resposta.toUpperCase() +
                          "' e a correta e '" + correta.toUpperCase() + "'.";
        res.className = "resultado erro";
        var ei = resposta.charCodeAt(0) - 97;
        itens[ei].classList.add("errada");
    }

    for (var i = 0; i < itens.length; i++) {
        itens[i].style.cursor = "default";
    }
}

function mostrarExp(id) {
    var el = document.getElementById(id);
    el.style.display = (el.style.display === "block") ? "none" : "block";
}

function rodarQ10() {
    var codigo = document.getElementById("codigo10").value;
    var box = document.getElementById("out10");
    box.style.display = "block";
    try {
        eval(codigo);
        box.textContent = "Codigo executado! Veja os prompts/alerts.";
    } catch (erro) {
        box.textContent = "ERRO: " + erro.message;
    }
}
