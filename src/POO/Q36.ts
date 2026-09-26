// Portal de Cursos e Treinamentos Online

// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.
export function executarQuestao36():void{
class Curso {

    private titulo: string
    private cargaHoraria: number

    constructor(titulo: string, cargaHoraria: number) {
        this.titulo = titulo
        this.cargaHoraria = cargaHoraria
    }

    emitirCertificado(): void {
        console.log("Certificado")
    }
}


class CursoLivre extends Curso {

    constructor(titulo: string, cargaHoraria: number) {
        super(titulo, cargaHoraria)
    }

    emitirCertificado(): void {
        alert("Certificado do Curso Livre liberado!")
    }
}


class CursoTecnico extends Curso {

    private numeroProjeto: number
    private notaProjeto: number

    constructor(
        titulo: string,
        cargaHoraria: number,
        numeroProjeto: number,
        notaProjeto: number
    ) {
        super(titulo, cargaHoraria)

        this.numeroProjeto = numeroProjeto
        this.notaProjeto = notaProjeto
    }

    emitirCertificado(): void {

        if (this.notaProjeto >= 7) {
            alert("Certificado do Curso Técnico liberado!")
        } else {
            alert("Certificado do Curso Técnico pendente!")
        }

    }
}


let cursos: Curso[] = []

let continuar = "S"

while (continuar.toUpperCase() === "S") {

    let tipo = Number(
        prompt("Digite o tipo de curso:\n1 - Curso Livre\n2 - Curso Técnico")
    )

    let titulo = String(
        prompt("Digite o título do curso:")
    )

    let cargaHoraria = Number(
        prompt("Digite a carga horária do curso:")
    )

    if (tipo === 1) {

        let cursoLivre = new CursoLivre(
            titulo,
            cargaHoraria
        )

        cursos.push(cursoLivre)

    } else if (tipo === 2) {

        let numeroProjeto = Number(
            prompt("Digite o número do projeto final:")
        )

        let notaProjeto = Number(
            prompt("Digite a nota do projeto final:")
        )

        let cursoTecnico = new CursoTecnico(
            titulo,
            cargaHoraria,
            numeroProjeto,
            notaProjeto
        )

        cursos.push(cursoTecnico)

    } else {

        alert("Tipo de curso inválido!")

    }

    continuar = String(
        prompt("Deseja cadastrar outro curso? S/N")
    )
}


let i = 0

while (i < cursos.length) {

    cursos[i].emitirCertificado()

    i++

}
}