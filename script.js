
let canvas;
let ctx;
let FPS = 50;
//PAISATGE
let ampleC = 50;
let altC = 50;
let cesped = '#06d606';
let terra = '#b66e02';
let aigua = '#148bcf';
let pedra = '#8b8a8a';
let clau = '#eeff00';
let porta = '#682f00'
let botasagua = '#b90db1'

let retras = 0;
let escenari = [

    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 4, 0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 6, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 3, 3, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 0, 0, 3, 0, 0, 3, 3, 0, 3, 0, 2, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 2, 2, 2, 2, 2, 2, 3, 4, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]


]
function dibuixaEscenari() {
    let color;
    for (let y = 0; y < 24; y++) {
        for (let x = 0; x < 48; x++) {
            if (escenari[y][x] == 0) {
                color = cesped
            }
            if (escenari[y][x] == 1) {
                color = terra
            }
            if (escenari[y][x] == 2) {
                color = aigua
            }
            if (escenari[y][x] == 3) {
                color = pedra
            }
            if (escenari[y][x] == 4) {
                color = clau
            }
            if (escenari[y][x] == 5) {
                color = porta
            }
            if (escenari[y][x] == 6)
                color = botasagua
            ctx.fillStyle = color;
            ctx.fillRect(x * ampleC, y * altC, ampleC, altC)
        }
    }
}

//PROTAGONISTA Y VILLANO
let imatge;
let imatge2;
//INICIALITZA EL JOC NOMES UNA VEGADA

function inicializar() {
    canvas = document.getElementById("pam talla");
    ctx = canvas.getContext('2d');
    imatge = new Image();
    imatge2 = new Image();
    imatge.src = './ojo.png'
    imatge2.src = './Steve_Urkel.png'
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
    this.botasagua = false;

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
        if (escenari[y / 50][x / 50] == 2 || escenari[y / 50][x / 50] == 3) {
            colisio = true;

            return colisio;
        }
        return colisio;
    }
    this.logica = function () {
        if (escenari[this.y / 50][this.x / 50] == 4) {
            this.clau = true;
            alert("Has encontrado la llave de mi corazon")
            escenari[this.y / 50][this.x / 50] = 3
        }
        if (escenari[this.y / 50][this.x / 50] == 5) {
            if (this.clau) {
                alert("eres el puto amo, has salido vivo")
            } else { alert("esta cerrado tontorron") }
        }

    }
    this.logica2 = function () {
        if (escenari[this.y / 50][this.x / 50] == 6) {
            this.botasagua = true;
            alert("hs encotajfdro botsdas de gauia")
            escenari[this.y / 50][this.x / 50] = 0


        }
            if (escenari[this.y / 50][this.x / 50] == 2) {
                if (this.botasagua) {
                    alert("ya puedes caminar por el agua")
                  
                } else {
                    alert("no puedes caminar por el agua")
                    
                }
            }
        
    }


this.adalt = function () {
    if (!this.margenes(this.x, this.y - 50)) {
        this.y = this.y - 50
    }
    this.logica()
    this.logica2()
}

this.baix = function () {
    if (!this.margenes(this.x, this.y + 50)) {
        this.y = this.y + 50
    }
    this.logica()
    this.logica2()
}
this.dreta = function () {
    if (!this.margenes(this.x + 50, this.y)) {
        this.x = this.x + 50
    }
    this.logica()
    this.logica2()
}
this.esquerra = function () {
    if (!this.margenes(this.x - 50, this.y)) {
        this.x = this.x - 50
    }
    this.logica()
    this.logica2()
}
}

let enemics = function (x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel;

    this.dibuixa = function () {

        ctx.fillRect(this.x, this.y, 50, 50)

    }
    this.margenes = function (x, y) {
        let colisio = false;
        if (escenari[y / 50][x / 50] == 2 || escenari[y / 50][x / 50] == 3) {
            colisio = true;

            return colisio;
        }
        return colisio;
    }
    this.mou = function () {
        retras++;
        if (retras == 50) {
            retras=0
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
let porqueria = new enemics(200, 300, 10)

document.addEventListener('keydown', function (tecla) {
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

function principal() {
    borrarPantalla();
    dibuixaEscenari()

    sophie.dibuixa();
    porqueria.dibuixa();
    porqueria.mou();


}

