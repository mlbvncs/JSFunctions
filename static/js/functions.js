function MAIOR_MENOR(a, b, c, d, e){
    maior = Math.max(a, b, c, d, e);
    menor = Math.min(a, b, c, d, e);

    return [maior, menor];
}

function VOGAL(c){
    if(c === "A" || c === "a" || c === "E" || c === "e" || c === "I" || c === "i" || c === "O" || c === "o" || c === "U" || c === "u"){
        return 1;
    }else{
        return 0;
    }
}

function LIMITES(li, ls){
    let somatorio = 0;
    let pares = [];

    for(let x=li+1; x<ls; x++){
        if(x%2 == 0){
            somatorio += x;
            pares.push(x);
        }
    }

    return [somatorio, pares.join(", ")];
}

function ORDEM(a, b, c){
    if(a > b && a > c){
        if(b > c){
            return [c, b, a];
        }else{
            return [b, c, a];
        }
    }else if(b > a && b > c){
        if(a > c){
            return [c, a, b];
        }else{
            return [a, c, b];
        }
    }else if(c > a && c > b){
        if(a > b){
            return [b, a, c];
        }else{
            return [a, b, c];
        }
    }
}

function POSITIVO_NEGATIVO(x){
    if(x > 0){
        return true;
    }else if(x < 0){
        return false;
    }
}

function PAR_IMPAR(x){
    if(x%2 == 0){
        return true;
    }else{
        return false;
    }
}

const select = document.getElementById('questões2');
select.addEventListener('change', function() {
    var resposta = document.getElementById('questões2').value;

    if(resposta === 'MAIOR_MENOR'){
        let num1 = Number(prompt("Digite o primeiro número:"));
        let num2 = Number(prompt("Digite o segundo número:"));
        let num3 = Number(prompt("Digite o terceiro número:"));
        let num4 = Number(prompt("Digite o quarto número:"));
        let num5 = Number(prompt("Digite o quinto número:"));

        let [maior, menor] = MAIOR_MENOR(num1, num2, num3, num4, num5);
        alert("O maior número é: " + maior + ".\nO menor número é: " + menor + ".");

        select.selectedIndex = 0;
    }else if(resposta === 'VOGAL'){
        let caractere = prompt("Digite um caractere:");

        if(VOGAL(caractere) == 1){
            alert("Resultado: Vogal.");
        }else{
            alert("Resultado: Não é vogal.");
        }

        select.selectedIndex = 0;
    }else if(resposta === 'LIMITES'){
        let inicio = Number(prompt("Digite o início do intervalo aberto:"));
        let fim = Number(prompt("Digite o fim do intervalo aberto:"));

        let [somatorio, pares] = LIMITES(inicio, fim);

        alert("Números pares no intervalo aberto: " + pares + ".\nSomatório: " + somatorio + ".");

        select.selectedIndex = 0;
    }else if(resposta === 'ORDEM'){
        let num1 = Number(prompt("Digite o primeiro número:"));
        let num2 = Number(prompt("Digite o segundo número:"));
        let num3 = Number(prompt("Digite o terceiro número:"));

        let [inicio, meio, fim] = ORDEM(num1, num2, num3);

        alert("Ordem crescente: " + inicio + ", " + meio + ", " + fim + ".");

        select.selectedIndex = 0;
    }else if(resposta === 'POSITIVO_NEGATIVO'){
        let valor = Number(prompt("Digite um valor:"));

        if(POSITIVO_NEGATIVO(valor) === true){
            alert("Resultado: Valor positivo.");
        }else if(POSITIVO_NEGATIVO(valor) === false){
            alert("Resultado: Valor negativo.");
        }

        select.selectedIndex = 0;
    }else if(resposta === 'PAR_IMPAR'){
        let valor = Number(prompt("Digite um valor:"));

        if(PAR_IMPAR(valor) === true){
            alert("Resultado: Valor par.");
        }else{
            alert("Resultado: Valor ímpar.");
        }

        select.selectedIndex = 0;
    }
});