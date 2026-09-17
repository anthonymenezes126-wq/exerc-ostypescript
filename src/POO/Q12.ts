// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim,   ' o sistema deve perguntar se deseja fazer uma
// nova locação.

class controladorCarro{
    private _modelo: string
    private _valor: number
    private _quant: number

    public get modelo(): string {
        return this._modelo
    }
    public set modelo(value: string) {
        this._modelo = value
    }
    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        this._valor = value
    }
   
    public get Quant(): number {
        return this._quant
    }
    public set Quant(value: number) {
        this._quant = value
    }

    constructor(modelo: string, valor: number, Quant: number){
        this._modelo = modelo
        this._valor = valor
        this._quant = Quant
    }
    calcularTotal(): number{
        return this._valor * this._quant
    }
    exibirResumo(): void{
        let total =  this.calcularTotal()

        console.log(`Modelo do carro: ${this._modelo}`)
        console.log(`Qual valor da diária R$: ${this._valor}`)
        console.log(`Quantidade de dias: ${this._quant}`)
        console.log(`Valor total: ${total}`)
    }
}

let continua = "S"
let modelo, dias, 
 while (continua == "S"){
    modelo = String(prompt("Qual o modelo do seu carro: "))
    dias = Number(prompt("Qual o valor da diária: "))
     = Number(prompt("Qual o valor"))
 }
