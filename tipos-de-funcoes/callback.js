// callbacks
// utilizando callbacks, se tem maior controle da ordem de chamadas.
// função que é passada como argumento para outra função.

const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 10, 25);
const resultSub = calc(sub, 19, 5);

console.log(resultSoma);
console.log(resultSub);