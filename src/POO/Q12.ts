export function executarQuestao12():void{
class ControladorCarro {
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
   
    public get quant(): number {
        return this._quant
    }
    public set quant(value: number) {
        this._quant = value
    }

    constructor(modelo: string, valor: number, quant: number){
        this._modelo = modelo
        this._valor = valor
        this._quant = quant
    }

    calcularTotal(): number {
        return this._valor * this._quant
    }

    exibirResumo(): void {
        let total = this.calcularTotal()
        console.log(`\n=== RESUMO DA LOCAÇÃO ===`)
        console.log(`Modelo do carro: ${this._modelo}`)
        console.log(`Valor da diária: R$ ${this._valor.toFixed(2)}`)
        console.log(`Quantidade de dias: ${this._quant}`)
        console.log(`Valor total: R$ ${total.toFixed(2)}`)
        console.log(`=========================\n`)
    }
}

let continua: string = "S"

while (continua.toUpperCase() === "S") {
    let modelo = String(prompt("Qual o modelo do seu carro: "))
    let valorDiaria = Number(prompt("Qual o valor da diária: "))
    let quantDias = Number(prompt("Qual a quantidade de dias: "))
    
    // Cria o objeto passando as variáveis corretas
    let novaLocacao = new ControladorCarro(modelo, valorDiaria, quantDias)
    
    // Exibe o resumo no console
    novaLocacao.exibirResumo()
    
    // Pergunta se o usuário deseja continuar e atualiza a variável do loop
    continua = String(prompt("Deseja fazer uma nova locação? (S/N): "))
}
}

