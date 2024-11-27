function calculadora(num1, num2, operador) { 
    if(operador === "+") {
        return  num1 + num2;
    } else if(operador === "-") {
        return num1 - num2;
    } else if (operador === "*") {
        return num1 * num2;
    } else if (operador === "/") {
        if(num2 === 0) {
            return 0;
        }
        return num1 / num2;
    } else {
        return "Operação inválida";
    }
}

function exibirResultados() {
    // Pega os dados em tela
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;

    // Manda para a calculadora
    let resultado = calculadora(numero1, numero2, operacao);

    // Exibe o resultado em tela
    document.getElementById("resultado").innerText = resultado;
}