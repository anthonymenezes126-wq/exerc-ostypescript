// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).
class Aluno {
    private _nome: string;
    private _nota1: number;
    private _nota2: number;

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
    
    public get nota1(): number {
        return this._nota1;
    }
    public set nota1(value: number) {
        this._nota1 = value;
    }
    
    public get nota2(): number {
        return this._nota2;
    }
    public set nota2(value: number) {
        this._nota2 = value;
    }

    constructor(nome: string, nota1: number, nota2: number) {
        this._nome = nome;
        this._nota1 = nota1;
        this._nota2 = nota2;
    }

    calcularMedia(): number {
        return (this._nota1 + this._nota2) / 2;
    }

    verificarSituacao(): string {
        if (this.calcularMedia() >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    mostrarDados(): void {
        console.log("Nome:", this._nome);
        console.log("Nota 1:", this._nota1);
        console.log("Nota 2:", this._nota2);
        console.log("Média:", this.calcularMedia());
        console.log("Situação:", this.verificarSituacao());
    }
}

let continu: string = "sim";

while (continu.toLowerCase() === "sim") {

    let nome: string = prompt("Digite o nome do aluno:")!;
    let nota1: number = Number(prompt("Digite a primeira nota:"));
    let nota2: number = Number(prompt("Digite a segunda nota:"));

    let aluno = new Aluno(nome, nota1, nota2);

    aluno.mostrarDados();

    continu = prompt("Deseja cadastrar outro aluno? (sim/não)")!;
}