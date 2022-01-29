/* Função autoinvocável

(
    function() {
        let name = "Digital Innovation One"
        return name;
    }
)();
//Digital Innovation One*/

const soma = (
    function() {
        return a + b;
    }
)(1, 2);

console.log(soma);