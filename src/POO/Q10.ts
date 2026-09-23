// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
export function executarQuestao10():void{

class BichinhoVirtual{
    nome: string
    fome: number
    saude: number
    idade: number

    constructor(nome: string, fome: number, saude: number, idade: number){
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade

        
    }
    alterarNome(novoNome: string): string{
            this.nome = novoNome
            return novoNome
        }
    alterarFome(novaFome: number): number{
        this.fome = novaFome
        return novaFome
    }
    alterarSaude(novaSaude: number): number{
        this.saude = novaSaude
        return novaSaude
    }
    alterarIdade(novaIdade: number){
        this.idade = novaIdade
        return novaIdade
    }

}

let no: string = String(prompt("Nome do seu Tamagushi: "))
let fome: number = Number(prompt("Informe de 0/100 qual o nível de fome do seu Tamagushi: "))
let saude: number = Number(prompt("Informe de 0/100 qual o nível "))
let idade: number = Number(prompt("Idade do Tamagushi: "))

let Tamagushi = new BichinhoVirtual(no, fome, saude, idade)

let n: string, novaFome: number, novaSaude: number, novaIdade: number

let opcao = 0

while(opcao != 5){
    console.log(`escolha uma das opções Abaixo: 
        1- Alterar Nome
        2- Alterar Fome
        3- Alterar Saúde
        4- Alterar Idade
        5- Sair das opções`)
    opcao = Number(prompt())

    if(opcao == 1){
        n = String(prompt("Digite o novo nome do seu Tamagushi: "))
        Tamagushi.alterarNome(n)

        console.log(`Nome alterado com sucesso! 
            Novo nome: ${Tamagushi.nome}`)
    }
    else if(opcao == 2 ){
        novaFome = Number(prompt("qual o novo nível de fome de 0/100 do seu Tamagushi: "))
        Tamagushi.alterarFome(novaFome)
        console.log(`Fome alterado com sucesso! 
            Nova fome: ${Tamagushi.fome} `)
    }
    else if(opcao == 3){
        novaSaude = Number(prompt("qual o novo nível de saúde de 0/100 do seu Tamagushi: "))
        Tamagushi.alterarSaude(novaSaude)
        console.log(`saúde alterado com sucesso! 
            Nova saúde: ${Tamagushi.saude} `)
    }
    else if (opcao == 4){
        novaIdade = Number(prompt("qual o novo nível de fome de 0/100 do seu Tamagushi: "))
        Tamagushi.alterarIdade(novaIdade)
        console.log(`Idade alterado com sucesso! 
            Nova idade: ${Tamagushi.idade} `)
    }
    else if (opcao == 5){
        console.log(`sair das opções: `)
        break
    }else{
        console.log("OPÇÃO INVÁLIDA")
    }
}
}