class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

// método de instância - refere-se às instancias criadas (controle1.aumentarVolume();)

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

// método estático - refere-se á toda a classe (ControleRemoto.trocaPilha();)

    static trocaPilha() {
        console.log("trocando")
    }
}

const controle1 = new ControleRemoto('LG');