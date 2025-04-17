        // Função que realiza o cálculo da soma

        function somar() {

            // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
            var num1 = parseFloat(document.getElementById("num1").value);

            // Criação da variável 'num2' com o valor do segundo campo, convertido para número
            var num2 = parseFloat(document.getElementById("num2").value);

            // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
            var res = num1 + num2;

            // Verificação para garantir que os valores são números válidos
            if (isNaN(res)) {
                // Exibe mensagem de erro se os valores não forem numéricos
                document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
            } else {
                // Atualiza o parágrafo com o resultado da soma
                document.getElementById("resultado").innerHTML = "O resultado é: " + res;
            }
        }

                // Função que realiza o cálculo da subtração

                function subtrair() {

                    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
                    var num1 = parseFloat(document.getElementById("num1").value);
        
                    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
                    var num2 = parseFloat(document.getElementById("num2").value);
        
                    // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
                    var res = num1 - num2;
        
                    // Verificação para garantir que os valores são números válidos
                    if (isNaN(res)) {
                        // Exibe mensagem de erro se os valores não forem numéricos
                        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
                    } else {
                        // Atualiza o parágrafo com o resultado da soma
                        document.getElementById("resultado").innerHTML = "O resultado é: " + res;
                    }
                }

                 // Função que realiza o cálculo da multiplicação

                 function multiplicar() {

                    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
                    var num1 = parseFloat(document.getElementById("num1").value);
        
                    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
                    var num2 = parseFloat(document.getElementById("num2").value);
        
                    // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
                    var res = num1 * num2;
        
                    // Verificação para garantir que os valores são números válidos
                    if (isNaN(res)) {
                        // Exibe mensagem de erro se os valores não forem numéricos
                        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
                    } else {
                        // Atualiza o parágrafo com o resultado da soma
                        document.getElementById("resultado").innerHTML = "O resultado é: " + res;
                    }
                }

                 // Função que realiza o cálculo da divisão

                 function dividir() {

                    // Criação da variável 'num1' com o valor do primeiro campo, convertido para número
                    var num1 = parseFloat(document.getElementById("num1").value);
        
                    // Criação da variável 'num2' com o valor do segundo campo, convertido para número
                    var num2 = parseFloat(document.getElementById("num2").value);
        
                    // Criação da variável 'soma' para armazenar o resultado da soma de 'num1' e 'num2'
                    var res = num1 / num2;
        
                    // Verificação para garantir que os valores são números válidos
                    if (isNaN(res)) {
                        // Exibe mensagem de erro se os valores não forem numéricos
                        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
                    } else {
                        // Atualiza o parágrafo com o resultado da soma
                        document.getElementById("resultado").innerHTML = "O resultado é: " + res;
                    }
                }