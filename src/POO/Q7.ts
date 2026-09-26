// Questao 07
export function executarQuestao7():void{

class Empresa {

    nome: string;
    cargo: string;
    salario: number;

    constructor(nome: string, cargo: string, salario: number) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    percentual(): number {
        let aumento = this.salario * 5 / 100;
        return aumento;
    }

    novosal(): number {
        let novoSalario: number;
        let sal = this.percentual();

        novoSalario = this.salario + sal;

        return novoSalario;
    }
}

let nome: string = String(prompt("Qual o seu nome? "));
let cargo: string = String(prompt("Qual o seu cargo? "));
let salario: number = Number(prompt("Qual o seu salário? "));

let empresa = new Empresa(nome, cargo, salario);

alert(`Nome: ${empresa.nome}`);
alert(`Cargo: ${empresa.cargo}`);
alert(`Salário atual: R$ ${empresa.salario.toFixed(2)}`);
alert(`Aumento de 5%: R$ ${empresa.percentual().toFixed(2)}`);
alert(`Novo salário: R$ ${empresa.novosal().toFixed(2)}`);
}