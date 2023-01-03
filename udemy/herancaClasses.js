class Dispositivo {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
       if(this.ligado){
        console.log(this.nome + "já está ligado")
        return
       }else{
        this.ligado = true
       }
    }
    desligar() {
        if(!this.ligado){
            console.log(this.nome + "já está desligado")
            return
        }else{
            this.ligado = false
        }
    }
}
const d1 = new Dispositivo("Celular")
console.log(d1)
d1.ligar()
console.log(d1)

class Smartphone extends Dispositivo {
    constructor(nome, cor) {
        super(nome)
        this.cor = cor
    }
}

const s1 = new Smartphone("iPhone", "Preto")
console.log(s1)
s1.ligar()
console.log(s1)