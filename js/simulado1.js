// ===== SIMULADO 1 — LOGICA =====

function toggle(id) {
    var el = document.getElementById(id);
    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}

function rodarQ6() {
    var x = 10;
    var y = "10";
    var r1 = x == y;
    var r2 = x === y;
    var box = document.getElementById("output6");
    box.style.display = "block";
    box.innerHTML = "alert 1  (x == y):  " + r1 + "\nalert 2  (x === y): " + r2;
}

function rodarQ7() {
    var n = Math.floor(Math.random() * 4);
    var box = document.getElementById("output7");
    box.style.display = "block";
    box.innerHTML = "n = " + n + "\n(Rode varias vezes para ver os valores possiveis!)";
}

function rodarQ8() {
    var a = 7;
    var b = 3;
    var resultado = a % b;
    var box = document.getElementById("output8");
    box.style.display = "block";
    box.innerHTML = "Resultado: " + resultado;
}

function rodarQ9() {
    var nome = prompt("Nome:");
    var idade = prompt("Idade:");
    var tipo = typeof idade;
    var box = document.getElementById("output9");
    box.style.display = "block";
    if (idade >= 18) {
        box.innerHTML = "Output  =>  Maior de idade\n\nNota: tipo de 'idade' = " + tipo + " (string!).\nFunciona por coercao automatica do JS.";
    } else {
        box.innerHTML = "Output  =>  Menor de idade\n\nNota: tipo de 'idade' = " + tipo + " (string!).\nFunciona por coercao automatica do JS.";
    }
}

function rodarQ10() {
    var codigo = document.getElementById("codigoQ10").value;
    var box = document.getElementById("output10");
    box.style.display = "block";
    try {
        eval(codigo);
        box.innerHTML = "Codigo executado sem erros! Veja o prompt/alert.";
    } catch (erro) {
        box.innerHTML = "ERRO: " + erro.message;
    }
}
