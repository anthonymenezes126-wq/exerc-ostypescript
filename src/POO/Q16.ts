// Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados. Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar por tipo (Mamíferos ou Aves) e simular a 'hora da alimentação' chamando o método de som de cada um.
export function executarQuestao16():void{
abstract class animal{

    private _nome: string
    private _especie: string
    private _idade: number
    private _sexo: string

    constructor(nome:string, especie:string, idade: number, sexo: string){
        this._nome = nome
        this._especie = especie
        this._idade = idade
        this._sexo = sexo   
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    public get especie(): string {
        return this._especie
    }
    public set especie(value: string) {
        this._especie = value
    }
    
    public get idade(): number {
        return this._idade
    }
    public set idade(value: number) {
        this._idade = value
    }
  
    public get sexo(): string {
        return this._sexo
    }
    public set sexo(value: string) {
        this._sexo = value
    }

    abstract emitirSom(): void
    abstract mover(): void
}
class 
}