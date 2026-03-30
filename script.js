
let canvas;
let ctx;
let FPS = 50;
//PAISATGE
let ampleC = 50;
let altC = 50;

let tilemap
let retras = 0;
let mostrarInventario = false;

let escenari = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 3, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 2, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 5, 2, 0, 2, 2, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


]
function dibuixaEscenari() {
    let color;

    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 48; x++) {
            let tile = escenari[y][x]
            if (tile <= 3) {
                ctx.drawImage(tilemap2, tile * 32, 0, 32, 32, x * ampleC, y * altC, ampleC, altC)

            } else if (tile >= 4 && tile <= 7) {
                ctx.drawImage(tilemap3, (tile - 4) * 32, 0, 32, 32, x * ampleC, y * altC, ampleC, altC)
            }

            else if (tile >= 8 && tile <= 11) {
                ctx.drawImage(tilemap4, (tile - 8) * 32, 0, 32, 32, x * ampleC, y * altC, ampleC, altC)
            }
        }
    }
}

//PROTAGONISTA Y VILLANO
let imatge;
let imatge2;
let imatge3;
let tilemap2
let tilemap3
let tilemap4
//INICIALITZA EL JOC NOMES UNA VEGADA

function inicializar() {
    canvas = document.getElementById("pam talla");
    ctx = canvas.getContext('2d');
    imatge = new Image();
    imatge2 = new Image();
    imatge3 = new Image()
    tilemap2 = new Image();
    tilemap3 = new Image();
    tilemap4 = new Image();
    imatge.src = './morda.png'
    imatge2.src = './riri.png'
    imatge3.src = './ojo.png'
    tilemap2.src = './tilemap2.png'
    tilemap3.src = './llaves123.png'
    tilemap4.src = './puertas.png'
    //INTERVAL QUE S'EXECUTA 50 VEGADAS PER SEGON
    setInterval(function () {
        principal();
    }, 1000 / FPS);
}
//MODIFICA SA PANTALLA
function borrarPantalla() {
    canvas.width = 2400
    canvas.height = 1200
}
let prota = function (x, y, vel) {
    this.x = x;
    this.y = y;
    this.clau = false;
    this.inventario = []

    this.agregarItem = function (item) {
        this.inventario.push(item)
        console.log("Has conseguido: " + item)
    }
    this.mostrarInventario = function () {
        console.log("Inventario");
        for (let i = 0; i < this.inventario.length; i++) {
            console.log("- " + this.inventario[i]);
        }

    }

    this.incluyeItem = function (item) {
        return this.inventario.includes(item)

    }

    this.muerte = function (x, y) {

        let died = false;
        if (this.x == x && this.y == y) {
            died = true;
        }
        return died
    }


    this.dibuixa = function () {
        ctx.drawImage(imatge, this.x, this.y, 50, 50)
    }
    this.texte = function () {
        ctx.font = '30px impact'
        ctx.fillStyle = '#555555'
        ctx.fillText("X: " + this.x + " Y: " + this.y, 50, 50)
    }
    this.margenes = function (x, y) {
        let colisio = false;
        if (escenari[y / 50][x / 50] == 0) {
            colisio = true;

            return colisio;
        }

        if (escenari[y / 50][x / 50] == 1 && !this.incluyeItem("Llave")) {
            return true;
        }
        if (escenari[y / 50][x / 50] == 8 && !this.incluyeItem("Llave clasica")) {
            return true;
        }
        if (escenari[y / 50][x / 50] == 9 && !this.incluyeItem("Llave azul")) {
            return true;
        }
        if (escenari[y / 50][x / 50] == 10 && !this.incluyeItem("Llave verde")) {
            return true;
        }
        if (escenari[y / 50][x / 50] == 11 && !this.incluyeItem("Llave roja")) {
            return true;
        }
        return false;
    }

    this.logica = function () {
        if (escenari[this.y / 50][this.x / 50] == 3) {

            alert("Has encontrado una llave de oro")
            escenari[this.y / 50][this.x / 50] = 2
            this.agregarItem("Llave");
        }
        if (escenari[this.y / 50][this.x / 50] == 1) {
            if (this.incluyeItem("Llave")) {

                console.log("eres el puto amo, has salido vivo")

            } else {

                alert("esta cerrado tontorron")

            }
        }
    }
    this.logica2 = function () {
        if (escenari[this.y / 50][this.x / 50] == 4) {

            alert("Has encontrado una Llave clasica")
            escenari[this.y / 50][this.x / 50] = 2
            this.agregarItem("Llave clasica");
        }
        if (escenari[this.y / 50][this.x / 50] == 8) {
            if (this.incluyeItem("Llave clasica")) {

                console.log("eres el puto amo, has salido vivo")

            } else {

                alert("esta cerrado tontorron")

            }
        }
    }
    this.logica3 = function () {
        if (escenari[this.y / 50][this.x / 50] == 5) {

            alert("Has encontrado una llave azul")
            escenari[this.y / 50][this.x / 50] = 2
            this.agregarItem("Llave azul");
        }
        if (escenari[this.y / 50][this.x / 50] == 9) {
            if (this.incluyeItem("Llave azul")) {

                console.log("eres el puto amo, has salido vivo")

            } else {

                alert("esta cerrado tontorron")

            }
        }
    }
    this.logica4 = function () {
        if (escenari[this.y / 50][this.x / 50] == 6) {

            alert("Has encontrado una llave roja")
            escenari[this.y / 50][this.x / 50] = 2
            this.agregarItem("Llave verde");
        }
        if (escenari[this.y / 50][this.x / 50] == 10) {
            if (this.incluyeItem("Llave verde")) {

                console.log("eres el puto amo, has salido vivo")

            } else {

                alert("esta cerrado tontorron")

            }
        }
    }
    this.logica5 = function () {
        if (escenari[this.y / 50][this.x / 50] == 7) {

            alert("Has encontrado una llave roja")
            escenari[this.y / 50][this.x / 50] = 2
            this.agregarItem("Llave clasica");
        }
        if (escenari[this.y / 50][this.x / 50] == 11) {
            if (this.incluyeItem("Llave roja")) {

                console.log("eres el puto amo, has salido vivo")

            } else {

                alert("esta cerrado rosa")

            }
        }
    }




    this.adalt = function () {
        if (!this.margenes(this.x, this.y - 50)) {
            this.y = this.y - 50
        }
        this.logica()
        this.logica2()
        this.logica3()
        this.logica4()
        this.logica5()
    }

    this.baix = function () {
        if (!this.margenes(this.x, this.y + 50)) {
            this.y = this.y + 50
        }
        this.logica()
        this.logica2()
        this.logica3()
        this.logica4()
        this.logica5()
    }
    this.dreta = function () {
        if (!this.margenes(this.x + 50, this.y)) {
            this.x = this.x + 50
        }
        this.logica()
        this.logica2()
        this.logica3()
        this.logica4()
        this.logica5()
    }
    this.esquerra = function () {
        if (!this.margenes(this.x - 50, this.y)) {
            this.x = this.x - 50
        }
        this.logica()
        this.logica2()
        this.logica3()
        this.logica4()
        this.logica5()
    }
}

let enemics = function (x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel;

    this.dibuixa = function () {

        ctx.drawImage(imatge2, this.x, this.y, 50, 50)

    }
    this.margenes = function (x, y) {
        let colisio = false;
        if (escenari[y / 50][x / 50] == 0 ) {
            colisio = true;

            return colisio;
        }
        return colisio;
    }
    this.mou = function () {
        let haMuerto = sophie.muerte(this.x, this.y)
        if (haMuerto) {
            alert("HAS MUERTO BOBO")
            sophie.x = 800
            sophie.y = 600
        }
        retras++;
        if (retras == 50) {
            retras = 0
          
            let posicio = Math.floor(Math.random() * 4)
            
            if (posicio == 0) {
                if (!this.margenes(this.x - 50, this.y))
                    this.x = this.x - 50
            }
            if (posicio == 1) {
                if (!this.margenes(this.x + 50, this.y))
                    this.x = this.x + 50
            }
            if (posicio == 2) {
                if (!this.margenes(this.x, this.y - 50))
                    this.y = this.y - 50
            }
            if (posicio == 3) {
                if (!this.margenes(this.x, this.y + 50))
                    this.y = this.y + 50
            }
            
        }

    }
}







let sophie = new prota(200, 550);
let porqueria = new enemics(200, 300)
let gay = new enemics(200, 400)
let Omar = new enemics(600, 1000)



document.addEventListener('keydown', function (tecla) {
    if (tecla.key == 'i') {
        mostrarInventario = !mostrarInventario
    }
    if (tecla.key == 'ArrowUp') {
        sophie.adalt()

    }

    if (tecla.key == 'ArrowDown') {
        sophie.baix()

    }

    if (tecla.key == 'ArrowRight') {
        sophie.dreta()

    }
    if (tecla.key == 'ArrowLeft') {
        sophie.esquerra()

    }
})
function dibujarInventario() {


    ctx.fillStyle = "rgba(0,0,0,0.7)";
    ctx.fillRect(500, 200, 800, 600);


    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Inventario", 550, 260);


    ctx.font = "40px Arial";

    for (let i = 0; i < sophie.inventario.length; i++) {
        ctx.fillText("- " + sophie.inventario[i], 550, 320 + i * 40);
    }
}

function principal() {
    borrarPantalla();
    dibuixaEscenari();

    sophie.dibuixa();
    porqueria.dibuixa();
    porqueria.mou();
    gay.dibuixa()
    gay.mou()
    Omar.dibuixa()
    Omar.mou()
    david.dibuixa()
    david.mou()
    david2.dibuixa()
    david2.mou()
    if (mostrarInventario) {
        dibujarInventario();
    }

}

