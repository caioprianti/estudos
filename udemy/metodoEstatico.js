class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume++
    }
    diminuirVolume() {
        this.volume--
    }
}
const controle1 = new ControleRemoto("LG")
console.log(controle1)
controle1.aumentarVolume()
console.log(controle1)