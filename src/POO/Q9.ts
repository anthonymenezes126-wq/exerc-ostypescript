// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// // cada produto.
export function executarQuestao9():void{
class Loja{
    nome: string
    preco: number
    quant: number

    constructor(nomeProduto: string, preco: number, quant: number){
        this.nome = nomeProduto
        this.preco = preco
        this.quant = quant
    }
    exibirValorTotal(preco: number, quant: number): number{
        let valorTotal = (preco * quant)
        return valorTotal
    }
}

let nomeProduto: string = String(prompt("Qual nome do produto: "))
let preco: number = Number(prompt("Qual o valor do produto: "))
let quant: number = Number(prompt("Qual a quantidade de produto: "))

let novoProduto = new Loja(nomeProduto, preco, quant)

console.log(`Nome do produto: ${nomeProduto}`)
console.log(`Preço do produto: ${preco}`)
console.log(`Quantidade de produtos:  ${quant}`)
console.log(`Total de produtos: ${novoProduto.exibirValorTotal(preco, quant)}`)
}