class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.atacar(this.tipo)
    }

    atacar(tipo) {
        if (tipo == "guerreiro") {
            console.log(`O tipo ${tipo} atacou usando espada`)
        } else if (tipo == "mago") {
            console.log(`O tipo ${tipo} atacou usando magia`)
        } else if (tipo == "monge") {
            console.log(`O tipo ${tipo} atacou usando artes marciais`)
        } else if (tipo == "ninja") {
            console.log(`O tipo ${tipo} atacou usando shuriken`)
        }
        else {
            console.log("Esse tipo nao esta cadastrado.")
        }
    }
}

let heroi1 = new heroi("Gustavo", 30, "ninja")

heroi1.atacar