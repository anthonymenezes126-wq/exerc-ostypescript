 export function executarQuestao16(): void {
    abstract class Animal {

        private _nome: string
        private _especie: string
        private _idade: number
        private _sexo: string

        constructor(nome: string, especie: string, idade: number, sexo: string) {
            this._nome = nome
            this._especie = especie
            this._idade = idade
            this._sexo = sexo
        }

        public get nome(): string {
            return this._nome
        }

        public set nome(value: string) {
            this._nome = value
        }

        public get especie(): string {
            return this._especie
        }

        public set especie(value: string) {
            this._especie = value
        }

        public get idade(): number {
            return this._idade
        }

        public set idade(value: number) {
            this._idade = value
        }

        public get sexo(): string {
            return this._sexo
        }

        public set sexo(value: string) {
            this._sexo = value
        }

        abstract emitirSom(): void
        abstract mover(): void
    }


    class Mamifero extends Animal {

        private _alimentacao: string

        constructor(
            nome: string,
            especie: string,
            idade: number,
            sexo: string,
            alimentacao: string
        ) {
            super(nome, especie, idade, sexo)
            this._alimentacao = alimentacao
        }

        public get alimentacao(): string {
            return this._alimentacao
        }

        public set alimentacao(value: string) {
            this._alimentacao = value
        }

        emitirSom(): void {
            console.log(this.nome + " emitiu um som de mamífero.")
        }

        mover(): void {
            console.log(this.nome + " está andando.")
        }
    }


    class Ave extends Animal {

        private _migratoria: boolean

        constructor(
            nome: string,
            especie: string,
            idade: number,
            sexo: string,
            migratoria: boolean
        ) {
            super(nome, especie, idade, sexo)
            this._migratoria = migratoria
        }

        public get migratoria(): boolean {
            return this._migratoria
        }

        public set migratoria(value: boolean) {
            this._migratoria = value
        }

        emitirSom(): void {
            console.log(this.nome + " emitiu um som de ave.")
        }

        mover(): void {
            console.log(this.nome + " está voando.")
        }
    }


    const animais: Animal[] = []

    let continuar = "s"

    while (continuar === "s") {

        const nome = prompt("Digite o nome do animal: ") ?? ""
        const especie = prompt("Digite a espécie: ") ?? ""
        const idade = Number(prompt("Digite a idade: "))
        const sexo = prompt("Digite o sexo: ") ?? ""

        const tipo = prompt(
            "Digite o tipo do animal:\n1 - Mamífero\n2 - Ave"
        )

        if (tipo === "1") {

            const alimentacao = prompt(
                "Digite o tipo de alimentação:"
            ) ?? ""

            const mamifero = new Mamifero(
                nome,
                especie,
                idade,
                sexo,
                alimentacao
            )

            animais.push(mamifero)

        } else if (tipo === "2") {

            const resposta = prompt(
                "É uma ave migratória?\n1 - Sim\n2 - Não"
            )

            let migratoria = false

            if (resposta === "1") {
                migratoria = true
            }

            const ave = new Ave(
                nome,
                especie,
                idade,
                sexo,
                migratoria
            )

            animais.push(ave)

        } else {
            console.log("Tipo inválido!")
        }

        continuar = prompt(
            "Deseja cadastrar outro animal? Digite s para continuar."
        ) ?? "n"
    }


    console.log("+ MAMÍFEROS +")

    for (const animal of animais) {

        if (animal instanceof Mamifero) {

            console.log("Nome: " + animal.nome)
            console.log("Espécie: " + animal.especie)
            console.log("Idade: " + animal.idade)
            console.log("Sexo: " + animal.sexo)
            console.log("Alimentação: " + animal.alimentacao)
            console.log("-------------------------")
        }
    }


    console.log("& AVES &")

    for (const animal of animais) {

        if (animal instanceof Ave) {

            console.log("Nome: " + animal.nome)
            console.log("Espécie: " + animal.especie)
            console.log("Idade: " + animal.idade)
            console.log("Sexo: " + animal.sexo)

            if (animal.migratoria === true) {
                console.log("Migratória: Sim")
            } else {
                console.log("Migratória: Não")
            }

            console.log("-------------------------")
        }
    }


    console.log("+ HORA DA ALIMENTAÇÃO +")

    for (const animal of animais) {

        animal.emitirSom()
    }
}
