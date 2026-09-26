// O Sistema de Bilhetagem de Transporte Intermunicipal

// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.
export function executarQuestao30():void{

abstract class Passagem {
    private nome: string;
    private cpf: string;
    private valorBase: number;

    constructor(nome: string, cpf: string, valorBase: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.valorBase = valorBase;
    }

    getNome(): string {
        return this.nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    getValorBase(): number {
        return this.valorBase;
    }

    abstract calcularValor(): number;
}

class PassagemComum extends Passagem {
    constructor(nome: string, cpf: string, valorBase: number) {
        super(nome, cpf, valorBase);
    }

    calcularValor(): number {
        return this.getValorBase();
    }
}

class PassagemEstudante extends Passagem {
    constructor(nome: string, cpf: string, valorBase: number) {
        super(nome, cpf, valorBase);
    }

    calcularValor(): number {
        return (this.getValorBase() * 50) / 100;
    }
}

let passagens: Passagem[] = [];

let continuar = "s";

while (continuar === "s") {
    let nome = prompt("Digite o nome do passageiro:") ?? "";
    let cpf = prompt("Digite o CPF:") ?? "";
    let valorBase = Number(prompt("Digite o valor base da passagem:"));

    let tipo = prompt(
        "Digite o tipo da passagem:\n1 - Comum\n2 - Estudante"
    );

    if (tipo === "1") {
        let passagem = new PassagemComum(nome, cpf, valorBase);
        passagens.push(passagem);
    } else if (tipo === "2") {
        let passagem = new PassagemEstudante(nome, cpf, valorBase);
        passagens.push(passagem);
    } else {
        console.log("Tipo de passagem inválido!");
    }

    continuar = prompt(
        "Deseja cadastrar outra passagem? Digite s para continuar."
    ) ?? "n";
}

console.log(" RELATÓRIO DE PASSAGENS ");

for (let passagem of passagens) {
    console.log("Nome: " + passagem.getNome());
    console.log("CPF: " + passagem.getCpf());
    console.log("Valor: R$ " + passagem.calcularValor());
}

let faturamentoTotal = 0;

for (let passagem of passagens) {
    faturamentoTotal = faturamentoTotal + passagem.calcularValor();
}

console.log("Faturamento total: R$ " + faturamentoTotal);

}