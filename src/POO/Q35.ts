// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.
export function executarQuestao35():void{
abstract class Paciente {

    private _nome: string
    private _cartaoSUS: string

    constructor(nome: string, cartaoSUS: string) {
        this._nome = nome
        this._cartaoSUS = cartaoSUS
    }

    public get nome(): string {
        return this._nome
    }

    public set nome(value: string) {
        this._nome = value
    }

    public get cartaoSUS(): string {
        return this._cartaoSUS
    }

    public set cartaoSUS(value: string) {
        this._cartaoSUS = value
    }

    exibirFicha(): void {
        console.log(`Nome: ${this._nome}`)
        console.log(`Cartão SUS: ${this._cartaoSUS}`)
    }
}


class PacienteComum extends Paciente {

    constructor(nome: string, cartaoSUS: string) {
        super(nome, cartaoSUS)
    }

}


class PacientePrioritario extends Paciente {

    private _tipoPrioridade: string

    constructor(nome: string, cartaoSUS: string, tipoPrioridade: string) {
        super(nome, cartaoSUS)
        this._tipoPrioridade = tipoPrioridade
    }

    public get tipoPrioridade(): string {
        return this._tipoPrioridade
    }

    public set tipoPrioridade(value: string) {
        this._tipoPrioridade = value
    }

    exibirFicha(): void {
        console.log(`Nome: ${this.nome}`)
        console.log(`Cartão do SUS: ${this.cartaoSUS}`)
        console.log(` Prioridade: ${this._tipoPrioridade} ***`)
    }
}


let pacientes: Paciente[] = []

let continu = "S"

while (continuar.toUpperCase() === "S") {

    let tipo = Number(
        prompt("Digite 1 para Paciente Comum ou 2 para Paciente Prioritário:")
    )

    let nome = prompt("Digite o nome do paciente:") || ""

    let cartaoSUS = prompt("Digite o número do cartão SUS:") || ""

    if (tipo === 1) {

        let paciente = new PacienteComum(nome, cartaoSUS)

        pacientes.push(paciente)

    }

    else if (tipo === 2) {

        let prioridade = prompt(
            "Digite o tipo de prioridade (Idoso ou Gestante):"
        ) || ""

        let paciente = new PacientePrioritario(
            nome,
            cartaoSUS,
            prioridade
        )

        pacientes.push(paciente)
    }

    continuar = prompt(
        "Deseja cadastrar outro paciente? Digite S para continuar ou N para sair:"
    ) || "N"
}


console.log(" FICHAS DE ATENDIMENTO ")

let totalPrioritarios = 0

for (let i = 0; i < pacientes.length; i++) {

    pacientes[i].exibirFicha()

    if (pacientes[i] instanceof PacientePrioritario) {
        totalPrioritarios++
    }
}

console.log(`Total de pacientes prioritários: ${totalPrioritarios}`)
}