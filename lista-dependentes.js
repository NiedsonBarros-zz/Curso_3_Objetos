const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com",
    telefones: ["5581999454452", "5181981276955"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
  
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "20/03/2011")

console.log(filhaMaisNova[0].nome)
//imprimir os nomes dos dependentes usando o forEach
// cliente.dependentes.forEach(i => console.log(cliente.dependentes[i].nome))




