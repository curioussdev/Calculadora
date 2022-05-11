function insert(number) {
			
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + number; // inserir numero por botão
}; 

function limpar() {
    document.getElementById('resultado').innerHTML = ""; // limpar o campo resultado
};

function voltar() {
    // Voltar reduzinho uma casa
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
};

function calcular() {
    // A funçãoi eval serve para calcular as operações de matemáticas básicas como adição, sub, mult e divisão
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "vazio"
    };
};
