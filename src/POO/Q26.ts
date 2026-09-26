// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.
export function executarQuestao26():void{
class Conta {
    protected nomeTitular: string
    private saldo: number

    constructor(nomeTitular: string, saldo: number) {
        this.nomeTitular = nomeTitular
        this.saldo = saldo
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor
        } else {
            console.log("Saldo insuficiente!")
        }
    }

    getSaldo(): number {
        return this.saldo
    }
}


class ContaCorrente extends Conta {

    sacar(valor: number): void {
        super.sacar(valor + 2)
    }
}


class ContaPoupanca extends Conta {

    render(): void {
        this.depositar(this.getSaldo() * 0.01)
    }
}


const nome = prompt("Digite o nome do titular:") ?? ""

const tipo = prompt(
    "Qual conta deseja criar?\n1 - Conta Corrente\n2 - Conta Poupança"
)

let conta: Conta

if (tipo === "1") {
    conta = new ContaCorrente(nome, 0)
} else {
    conta = new ContaPoupanca(nome, 0)
}


let opcao = "0"

while (opcao !== "4") {

    opcao = prompt(
        "- MENU -\n" +
        "1 - Depositar\n" +
        "2 - Sacar\n" +
        "3 - Ver saldo\n" +
        "4 - Sair"
    ) ?? "4"


    if (opcao === "1") {

        const valor = Number(prompt("Digite o valor para depósito:"))

        conta.depositar(valor)

        console.log("Saldo atualizado: R$ " + conta.getSaldo())


    } else if (opcao === "2") {

        const valor = Number(prompt("Digite o valor para saque:"))

        conta.sacar(valor)

        console.log("Saldo atualizado: R$ " + conta.getSaldo())


    } else if (opcao === "3") {

        console.log("Saldo atual: R$ " + conta.getSaldo())


    } else if (opcao === "4") {

        console.log("Programa encerrado.")


    } else {

        console.log("Opção inválida!")
    }
}
}