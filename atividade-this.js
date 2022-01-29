function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


const pessoa1 = {
    nome: 'Monik',
    idade: 36
};

const pessoa2 = {
    nome: 'Rafael',
    idade: 33
};

const animal = {
    nome: 'Tom',
    idade: 7,
}

//console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(pessoa2, [7]));