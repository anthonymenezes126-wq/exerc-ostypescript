// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

abstract class Pedido{
    private _numeroMesa: number
    private _valorIngredientes: number

    constructor(numeroMesa: number, valorIngredientes: number){
        this._numeroMesa = numeroMesa
        this._valorIngredientes = valorIngredientes
    }
    public get numeroMesa(): number {
        return this._numeroMesa
    }
    public set numeroMesa(value: number) {
        this._numeroMesa = value
    }
   
    public get valorIngredientes(): number {
        return this._valorIngredientes
    }
    public set valorIngredientes(value: number) {
        this._valorIngredientes = value
    }

    abstract calcularValor(): number

    abstract exibirFatura(): number{
        alert(
            
        )
    }

}
class PedidoEntrega extends Pedido{
    private _taxa: number
    private _endereco: string

    public get endereco_1(): string {
        return this._endereco
    }

    public get taxa(): number {
        return this._taxa
    }

    constructor(numeroMesa: number, valorIngredientes: number, taxa: number,  endereco: string){
        super(numeroMesa, valorIngredientes)
        this._taxa = taxa
        this._endereco = endereco
    }

   calcularValor(): number {
        return this.valorIngredientes + this.taxa
    }
    exibirFatura(): number{

}
class PedidoLocal extends Pedido{
    constructor()
}