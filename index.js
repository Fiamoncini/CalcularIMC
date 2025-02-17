const peso = document.getElementById("peso");
        const altura = document.getElementById("altura");
        const calcular = document.getElementById("calcular");

        calcular.addEventListener("click", () => {
            let pesovalor = parseFloat(peso.value);
            let alturavalor = parseFloat(altura.value);
            
            if (isNaN(pesovalor) || isNaN(alturavalor) || pesovalor <= 0 || alturavalor <= 0) {
                document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos!";
                document.getElementById("situacao").innerHTML = "";
                return;
            }

            let imc = pesovalor / (alturavalor * alturavalor);
            let situacao = "";

            if (imc < 18.5) {
                situacao = "Abaixo do peso";
            } else if (imc < 24.9) {
                situacao = "Peso normal";
            } else if (imc < 29.9) {
                situacao = "Sobrepeso";
            } else if (imc < 34.9) {
                situacao = "Obesidade Grau I";
            } else if (imc < 39.9) {
                situacao = "Obesidade Grau II";
            } else {
                situacao = "Obesidade Grau III (Mórbida)";
            }

            document.getElementById("resultado").innerHTML = "O IMC é: " + imc.toFixed(2);
            document.getElementById("situacao").innerHTML = "Situação: " + situacao;
        });