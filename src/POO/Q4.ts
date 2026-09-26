export function executarQuestao4():void{
class Base_de_4_lados_declarados_nao_simultanio_com_1_2_3_4 {

    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

let base = Number(prompt("Digite a base do local: "));
let altura = Number(prompt("Digite a altura do local: "));
let piso = Number(prompt("Digite a área do piso: "));
let rodape = Number(prompt("Digite o tamanho do rodapé: "));

let local = new Base_de_4_lados_declarados_nao_simultanio_com_1_2_3_4(
    base,
    altura
);

console.log("Área do local: ", local.calcularArea());

console.log("Perímetro do local: ", local.calcularPerimetro());

console.log("Quantidade de pisos: ", local.calcularArea() / piso);

console.log("Quantidade de rodapés: ", local.calcularPerimetro() / rodape);

console.log("O valor total é: ", local.calcularArea());

}