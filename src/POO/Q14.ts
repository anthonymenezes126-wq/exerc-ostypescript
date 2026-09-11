// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class Livro{

    private _titulo: string
    private _autor: string
    private _anoPublicacao: number
    private _disponibilidade: boolean

        constructor(titulo: string, autor: string,  anopublicacao: number, disponibilidade: boolean){

            this._titulo = titulo
            this._autor = autor
            this._anoPublicacao = anopublicacao
            this._disponibilidade = disponibilidade
        }

    public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }
    public get autor(): string {
        return this._autor
    }
    public set autor(value: string) {
        this._autor = value
    }
    public get anoPublicacao(): number {
        return this._anoPublicacao
    }
    public set anoPublicacao(value: number) {
        this._anoPublicacao = value
    }
    public get disponibilidade(): boolean {
        return this._disponibilidade
    }
    public set disponibilidade(value: boolean) {
        this._disponibilidade = value
    }


    public listarLivro(): void{
        console.log(`Livro: ${this._titulo} \n Autor: ${this.autor} \n Ano de publicação ${this._anoPublicacao} \n disponibilidade ${this._disponibilidade}`)
    }

}

let listarLivro:Livro[] = []
let novolivro:Livro
let quantidade = 0

quantidade = Number(prompt("Informe quantos livros será cadastrado: "))

let titulo: string, autor: string, ano: number, disponibilidade: string, disp: boolean
for(let i = 0; i<=quantidade; i++ ){
    titulo = String(prompt("Título do Livro: "))
    autor = String(prompt("Informe o autor: "))
    ano = Number(prompt("Qual o ano do seu Livro: "))
    disponibilidade = String (prompt("Informe se o livro esta dispnível S-sim || N-não" )).toUpperCase()

     if(disponibilidade == "S"){
        disp = true
     }
     else{
        disp = false
     }

     novolivro = new Livro(titulo, autor, ano, disp)

     listarLivro.push(novolivro)
}

for(let i=0; i<=listarLivro.length; i++){
    listarLivro[i].listarLivro()

}