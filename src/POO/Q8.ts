// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

class Cadastro{
    nome: string
    cargo: string
    sal: number

    constructor(funcionario: string, cargo: string, sal: number ){
        this.nome = funcionario
        this.cargo = cargo 
        this.sal = sal
    }
}

let continuar: number = Number(prompt("Digite: \n 1- para continuar \n 2- para parar"))
let total = 0

while(continuar != 2) {
    let nome: string = String(prompt("Digite seu nome: "))
    let cargo: string = String(prompt("Digite seu cargo: "))
    let sal: number = Number(prompt("Digite seu salário: "))

    let func = new Cadastro(nome, cargo, sal)

   console.log(`=== DADOS DOS FUNCIONÁRIOS ===`)
   
   console.log(`Nome: ${func.nome}`)
   console.log(`Cargo: ${func.cargo}`)
   console.log(`Salário ${func.sal}`)
   
   total += func.sal

   continuar = Number(prompt("Cadastrar mais um funcionário? 1 ou 2?"))

   if (continuar > 2 || continuar < 1){
    alert("Opção inválida...")
   }
}