// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
//     aliado: {
//         nome: "Saruman",
//         classe: "mago"
//     },
//     status: "desaparecido"
// }

// // delete objPersonagem["aliado"]

// // console.log(objPersonagem.aliado)

// const delProp = delete objPersonagem.aliado["nome"]
// const delPropInexistente = delete objPersonagem["endereco"]

// console.log(delProp) //true
// console.log(delPropInexistente) //true

//Adicionando propiedades CPF e Seguro Social ao objeto pessoa
// const pessoa = {
//     nome:"Bruce Banner",
//     dataNascimento:"25/01/1980",
//     carteiraIdentidade:"997776-X",
//     email:"profbanner@email.com",
//     telefone:"+552877776666",
//     cidade:"Cachoeiro de Itapemirim",
//     estado:"ES"
//  }

//  pessoa.cpf = "123456789"
//  pessoa.seguroSocial = "7894561234"

//  console.log(pessoa.cpf.substring(0, 4))

// const pessoa = {
//     nome: "Peter Parker",
//     dataNascimento: "25/05/1990",
//     carteiraIdentidade: "789456123",
//     email: "peterparker@gmail.com",
//     telefone: "+55818978456123",
//     cidade: "Jaboatão dos Guararapes",
//     estado: "PE"
// }

// pessoa.cpf = "789456123456"

// const propriedades = ["nome","dataNascimento", "carteiraIdentidade","email","telefone","cidade", "estado", "cpf"]

// propriedades.forEach(element => console.log(pessoa[element]))
    
// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20"
//    }
   
//    const objPersonagem2 = Object.create(objPersonagem)
// objPersonagem2.nome = "Gandalf, o Cinzento"

// console.log(objPersonagem) //Gandalf, o Cinzento
// console.log(objPersonagem2) //Gandalf, o Cinzento