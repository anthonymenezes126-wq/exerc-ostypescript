// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class Livro{

    private _titulo: string
    public get titulo(): string {
        return this._titulo
    }
    public set titulo(value: string) {
        this._titulo = value
    }
    private _autor: string
    public get autor(): string {
        return this._autor
    }
    public set autor(value: string) {
        this._autor = value
    }
    private _anoPublicacao: number
    public get anoPublicacao(): number {
        return this._anoPublicacao
    }
    public set anoPublicacao(value: number) {
        this._anoPublicacao = value
    }
    private _disponibilidade: boolean
    public get disponibilidade(): boolean {
        return this._disponibilidade
    }
    public set disponibilidade(value: boolean) {
        this._disponibilidade = value
    }

    constructor(titulo: string, autor: string,  anopublicacao: number, disponibilidade: boolean){

        this._titulo = titulo
        this._autor = autor
        this._anoPublicacao = anopublicacao
        this._disponibilidade = disponibilidade
    }
    public listarLivro(): void{
        console.log(`Livro: ${this._titulo} \n Autor: ${this.autor} \n Ano de publicação ${this._anoPublicacao} \n disponibilidade ${this._disponibilidade}`)
    }

}

let ListarLivro [] = []