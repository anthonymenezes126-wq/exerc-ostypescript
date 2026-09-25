// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um

abstract class Usuario {
    private id: number
    private nome: string

    constructor(id: number, nome: string) {
        this.id = id
        this.nome = nome
    }

    public getId(): number {
        return this.id
    }

    public getNome(): string {
        return this.nome
    }

    abstract mensagem(): void
}


class Aluno extends Usuario {
    private curso: string

    constructor(id: number, nome: string, curso: string) {
        super(id, nome)
        this.curso = curso
    }

    public getCurso(): string {
        return this.curso
    }

    mensagem(): void {
        console.log(
            "Aluno " + this.getNome() +
            " do curso de " + this.curso +
            " almoçou no refeitório."
        )
    }
}


class Servidor extends Usuario {
    private departamento: string

    constructor(id: number, nome: string, departamento: string) {
        super(id, nome)
        this.departamento = departamento
    }

    public getDepartamento(): string {
        return this.departamento
    }

    mensagem(): void {
        console.log(
            "Servidor " + this.getNome() +
            " do departamento de " + this.departamento +
            " almoçou no refeitório."
        )
    }
}


class Refeitorio {
    private historico: Usuario[] = []

    registrarPresenca(usuario: Usuario): void {
        this.historico.push(usuario)
    }

    mostrarHistorico(): void {

        console.log("===== USUÁRIOS QUE ALMOÇARAM =====")

        for (const usuario of this.historico) {
            usuario.mensagem()
        }
    }
}


const refeitorio = new Refeitorio()

let continuar = "s"

while (continuar === "s") {

    const id = Number(prompt("Digite o identificador do usuário:"))
    const nome = prompt("Digite o nome completo:") ?? ""

    const tipo = prompt(
        "Digite o tipo de usuário:\n1 - Aluno\n2 - Servidor"
    )

    if (tipo === "1") {

        const curso = prompt("Digite o curso:") ?? ""

        const aluno = new Aluno(id, nome, curso)

        refeitorio.registrarPresenca(aluno)

    } else if (tipo === "2") {

        const departamento = prompt("Digite o departamento:") ?? ""

        const servidor = new Servidor(id, nome, departamento)

        refeitorio.registrarPresenca(servidor)

    } else {

        console.log("Tipo de usuário inválido!")
    }

    continuar = prompt(
        "Digite s para cadastrar outro usuário ou qualquer outra coisa para encerrar."
    ) ?? "n"
}


refeitorio.mostrarHistorico()
