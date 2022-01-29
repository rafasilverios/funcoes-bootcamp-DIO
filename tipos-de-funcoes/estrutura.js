/* 
estrutura de uma função

function nome(parâmetros) {
    instruções
}

qualquer variável criada dentro de uma função, apenas podem ser utilizadas dentro dela.


function nome(parâmetros) {
    instruções
    return; valor de retorno
}
*/



// Função anônima

const soma = function (a, b) {
    return a + b;
}

soma(1, 2) // 3
soma(5, 4) // 9