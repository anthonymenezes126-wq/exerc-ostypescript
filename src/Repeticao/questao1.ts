// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total
export function questao1(): void{

    let cont:number = 0
    let somatorio:number = 0
    let num:number = 1

    while(num != 0){
        let num:number = Number(prompt("Informe um número: "))
        cont++
        somatorio += num
    }
    console.log(`Contador: ${cont}`)
    console.log(`Somatorio: ${somatorio}`)

}