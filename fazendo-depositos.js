const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    telefones: ["5581999454452", "5181981276955"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"},
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }
],
    saldo: 100,
    deposito:function(valor){
        this.saldo += valor;
    }
}

console.log(cliente.saldo);
cliente.deposito(30)
console.log(cliente.saldo)
