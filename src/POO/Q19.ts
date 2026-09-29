// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

abstract class Sensor {

    private _codigo: number
    private _leitura: number

    constructor(codigo: number, leitura: number) {
        this._codigo = codigo
        this._leitura = leitura
    }

    public get codigo(): number {
        return this._codigo
    }

    public set codigo(value: number) {
        this._codigo = value
    }

    public get leitura(): number {
        return this._leitura
    }

    public set leitura(value: number) {
        this._leitura = value
    }

    abstract exibirLeitura(): void

    abstract verificarAlerta(): boolean
}


class SensorTemperatura extends Sensor {

    exibirLeitura(): void {
        console.log(`Sensor ${this.codigo}: ${this.leitura} °C`)
    }

    verificarAlerta(): boolean {
        return this.leitura > 40
    }
}


class SensorPressao extends Sensor {

    exibirLeitura(): void {
        console.log(`Sensor ${this.codigo}: ${this.leitura} atm`)
    }

    verificarAlerta(): boolean {
        return this.leitura > 5
    }
}


let sensores: Sensor[] = []

let continua = "S"

while (continua.toUpperCase() === "S") {

    let tipo = Number(
        prompt("Digite 1 para Sensor de Temperatura ou 2 para Sensor de Pressão:")
    )

    let codigo = Number(
        prompt("Digite o código do sensor:")
    )

    let leitura = Number(
        prompt("Digite a última leitura do sensor:")
    )

    if (tipo === 1) {

        let sensor = new SensorTemperatura(codigo, leitura)

        sensores.push(sensor)

    }

    else if (tipo === 2) {

        let sensor = new SensorPressao(codigo, leitura)

        sensores.push(sensor)

    }

    continuar = prompt(
        "Deseja cadastrar outro sensor? Digite S para continuar ou N para sair:"
    ) || "N"
}


console.log("===== RELATÓRIO DE ALERTAS =====")

for (let sensor of sensores) {

    if (sensor.verificarAlerta()) {

        sensor.exibirLeitura()

        console.log(`ALERTA DE PERIGO!`)
    }
}
