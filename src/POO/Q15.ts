// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.
export function executarQuestao15():void{
class Funcionario {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    calcularSalario(): number {
        return 0;
    }
}



class FuncionarioHorista extends Funcionario {
    private valorHora: number;
    private horasTrabalhadas: number;

    constructor(
        nome: string,
        valorHora: number,
        horasTrabalhadas: number
    ) {
        super(nome);

        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

      calcularSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}



class FuncionarioAssalariado extends Funcionario {
    private salarioMensal: number;

    constructor(
        nome: string,
        salarioMensal: number
    ) {
        super(nome);

        this.salarioMensal = salarioMensal;
    }

    calcularSalario(): number {
        return this.salarioMensal;
    }
}


let horista = new FuncionarioHorista("João", 20, 160);

let assalariado = new FuncionarioAssalariado("Maria", 3500);


console.log("_FUNCIONÁRIOS_");

console.log("Nome:", horista.getNome());
console.log("Salário: R$", horista.calcularSalario().toFixed(2));

console.log();

console.log("Nome:", assalariado.getNome());
console.log("Salário: R$", assalariado.calcularSalario().toFixed(2));
}