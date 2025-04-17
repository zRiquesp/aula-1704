// Função para converter Celsius para Fahrenheit 

 function celsius() {

    // Criação da variável 'num1' com o valor do campo de entrada, convertido para número
    var celsius = parseFloat(document.getElementById("num1").value);

    // Verificação para garantir que o valor inserido seja um número válido
    if (isNaN(celsius)) {
        // Exibe mensagem de erro se o valor não for numérico
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
    } else {
        // Calcula a conversão de Celsius para Fahrenheit
        var fahrenheit = (celsius * 9/5) + 32;

        // Atualiza o parágrafo com o resultado da conversão
        document.getElementById("resultado").innerHTML = celsius + "°C é igual a " + fahrenheit + "°F";
    }
}

// Função para converter Fahrenheit para Celsius

function fahrenheit() {
    var fahrenheit = parseFloat(document.getElementById("num1").value);
    if (isNaN(fahrenheit)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido.";
    } else {
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById("resultado").innerHTML = fahrenheit + "°F é igual a " + celsius.toFixed(2) + "°C";
    }
}