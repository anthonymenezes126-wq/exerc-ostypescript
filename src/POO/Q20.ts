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
    protected _valorIngredientes: number

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

    exibirFatura(){
        console.log(`Número da mesa: ${this._numeroMesa}`)
        console.log(`Valor de cada ingrediente: ${this._valorIngredientes}`)
        console.log(`Valor total: ${this.calcularValor()}`)
    }
}
class PedidoEntrega extends Pedido{
    private _taxa: number
    private _endereco: string

    public get endereco(): string {
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
        return this._valorIngredientes + this.taxa
    }
}
class PedidoLocal extends Pedido {

    calcularValor(): number {
        return this.valorIngredientes
    }
}


let pedidos: PedidoLocal[] = []

let continuar = "S"

let tipoPedido: number

let numeroMesa: number

let realizacaoPedido: number

let acum = 0

while (continuar.toUpperCase() === "S") {

    realizacaoPedido = Number(prompt("Onde será realizado seu pedido? Local ou Delivery: Digite 0 se for local e 1 se for delivery"))

    if (realizacaoPedido === 0) {

        alert(`O pedido é Local`)

        numeroMesa = Number(prompt("Qual o número da mesa: "))

        alert(`Qual seu pedido:

        1. Pizza: R$ 12,00

        2. Suco: R$ 2,00

        3. Para sair do programa`)

        tipoPedido = Number(prompt("Qual vai ser seu pedido: digite 1, 2 ou 3 caso queira sair!"))

        if (tipoPedido === 1) {

            alert(`Pizza`)

            let pedido = new PedidoLocal(numeroMesa, 12)

            pedidos.push(pedido)

        }

        else if (tipoPedido === 2) {

            alert(`Suco`)

            let pedido = new PedidoLocal(numeroMesa, 2)

            pedidos.push(pedido)

        }

        else if (tipoPedido === 3) {

            break

        }

    }

    else if (realizacaoPedido === 1) {

        alert(`O pedido é Delivery`)

        alert(`Qual seu pedido:

        1. Pizza: R$ 12,00

        2. Suco: R$ 2,00

        3. Para sair do programa`)

        tipoPedido = Number(prompt("Qual vai ser seu pedido: digite 1, 2 ou 3 caso queira sair!"))

        if (tipoPedido === 1) {

            alert(`Pizza Delivery`)

            let pedido = new PedidoEntrega(0, 12, 5, "Endereço do cliente")

            pedidos.push(pedido)

        }

        else if (tipoPedido === 2) {

            alert(`Suco Delivery`)

            let pedido = new PedidoEntrega(0, 2, 5, "Endereço do cliente")

            pedidos.push(pedido)

        }

        else if (tipoPedido === 3) {

            break

        }

    }

    continuar = prompt("Deseja realizar outro pedido? Digite S para continuar ou N para sair.") || "N"

}

console.log("Pedidos realizados:")

for (let pedido of pedidos) {

    pedido.exibirFatura()

    acum += pedido.calcularValor()

}

console.log(`Faturamento total: R$ ${acum}`)