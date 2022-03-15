const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    telefones: ["5581999454452", "5181981276955"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)