const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com"
}

console.log(`O Nome do cliente é ${cliente.nome}, os 3 primeiros digitos do seu CPF são: ${cliente.cpf.substring(0, 3)}. Sua idade é ${cliente.idade} anos.`)