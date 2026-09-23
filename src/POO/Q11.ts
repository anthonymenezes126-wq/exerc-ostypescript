// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.
export function executarQuestao11():void{
class Pedido{
    private _nomeCliente: string
    private _nomePedido: string
    private _valor: number

     constructor(nomeCliente:string, nomePedido: string, valor: number ){
        this._nomeCliente = nomeCliente
        this._nomePedido = nomePedido
        this._valor = valor
    }
    public get nomeCliente(): string {
        return this._nomeCliente
    }
    public set nomeCliente(value: string) {
        this._nomeCliente = value
    }
    public get nomePedido(): string {
        return this._nomePedido
    }
    public set nomePedido(value: string) {
        this._nomePedido = value
    }
    public get valor(): number {
        return this._valor
    }
    public set valor(value: number) {
        this._valor = value
    }

    exibirResumo(){
        console.log(`=== DADOS DO PEDIDO ===
            Nome do Cliente: ${this.nomeCliente}
            Nome do Pedido: ${this.nomePedido}
            valor do pedido: ${this.valor}`)
    }

}

let nomeCliente: string = String(prompt(`Digite seu Nome: `))
let nomePedido: string = String(prompt("Qual o nome do seu pedido: "))
let valor:number = Number(prompt("Digite o valor do seu pedido: "))

let Cliente = new Pedido(nomeCliente, nomePedido, valor)

Cliente.exibirResumo()
}