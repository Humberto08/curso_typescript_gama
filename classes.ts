class Data {
    // public dia: number;
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

const data = new Data(1, 1, 1970);
console.log(data.dia);



class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220

    ) { }

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5)        
        
    }

    frear() {
        this.alterarVelocidade(-5)  
        
    }
}

const carro = new Carro('Mini', 'Cooper', 210);
carro.acelerar();


// Herança
class Clubman extends Carro {
    private turbo = false;
    
    constructor() {
        super('Mini', 'Clubman', 230)
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const clubman = new Clubman();
clubman.acelerar()
clubman.frear()
clubman.ligarTurbo()
