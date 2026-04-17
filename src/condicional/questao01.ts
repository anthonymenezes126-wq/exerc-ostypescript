// 1. 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
export function questao01(): void{

let entrada = prompt("Informe um valor")

let valor:number = Number(entrada)

if(valor > 0){
    console.log("Número positivo")
}else if(valor < 0){
    console.log("Número negativo")
}else if(valor %2 == 0){
    console.log("Par")
}else if(valor %2 == 0){
    console.log("Ímpar")
}

}