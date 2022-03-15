const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "12345678912",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email" ]

// console.log(cliente[chaves[3]])

chaves.forEach(info => console.log(cliente[info]))