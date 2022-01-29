// this: seu valor muda de acordo com o lugar no código onde foi chamada.

const pessoa = {
    firstName: "Rafael",
    lastName: "Silverio",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

pessoa.fullName();
// Rafael Silverio

pessoa.getId();
// 1