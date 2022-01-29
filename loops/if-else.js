/* se e senao

function numeroPositivo(num) {
    let resultado;

    if(num < 0) { //condição
        resultado = false; // declaração 1 dentro de if, ocorre caso condição seja verdadeira.
    } else {
        resultado = true; // declaração 2 dentro de else, ocorre caso condição seja falsa
    }
    
    return resultado;
}

numeroPositivo(2) // true

numeroPositivo(-9) // false
*/





/* boas práticas

function numeroPositivo(num) {
    const ehNegativo = num < 0;

    if(ehNegativo) {
        return false;
    }

    return true;
}

*/





// verificação se número é positivo e maior que 10 com se e senao se

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!";
    }

    return "Esse número é positivo!";
}