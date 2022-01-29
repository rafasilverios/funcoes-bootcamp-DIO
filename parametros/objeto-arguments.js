// objeto "arguments": um array com todos os parâmetros passados quando a função foi invocada.

function findMax () {
    let max = -Infinity;

    for(let i = 0; i < arguments.longth; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}