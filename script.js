
let canvas;
let ctx;
let FPS = 50;
//PAISATGE
let ampleC = 50;
let altC = 50;
let cesped = '#06d606';
let terra = '#b66e02' ;
let aigua = '#148bcf';
let pedra =    '#8b8a8a';
let objecte = '#eeff00'
let escenari = [
 
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
[3,2,2,2,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,0,0,0,0,4,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,3,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,3,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,1,1,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,0,0,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,3,3,3,0,3,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,0,0,3,0,0,3,3,0,3,0,2,0,0,0,0,3,3,3,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,2,2,2,2,2,2,3,4,0,3,0,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]


]
function dibuixaEscenari(){
    let color; 
    for(let y=0; y<24; y++){
        for(let x=0; x<48; x++){
            if(escenari[y][x]==0){
                color=cesped
            }
            if(escenari[y][x]==1){
                color=terra
            }
            if(escenari[y][x]==2){
                color=aigua
            }
            if(escenari[y][x]==3){
                color=pedra
            }
            if(escenari[y][x]==4){
                color=objecte
            }
            ctx.fillStyle = color;
            ctx.fillRect(x*ampleC,y*altC,ampleC,altC)
        }
    }
}

//PROTAGONISTA Y VILLANO
let imatge;
let imatge2;
//INICIALITZA EL JOC NOMES UNA VEGADA

function inicializar(){
    canvas = document.getElementById("pam talla");
    ctx = canvas.getContext('2d');
  imatge =  new Image();
  imatge2 = new Image();
    imatge.src = './ojo.png'
    imatge2.src = './Steve_Urkel.png'
    //INTERVAL QUE S'EXECUTA 50 VEGADAS PER SEGON
    setInterval(function() {
        principal();
    }, 1000/FPS);
}
//MODIFICA SA PANTALLA
    function borrarPantalla(){
        canvas.width = 2400
        canvas.height= 1200
    }
let prota = function(x,y,vel){
    this.x = x;
    this.y = y;
    this.vel= vel;

    this.dibuixa = function(){
    ctx.drawImage(imatge,this.x,this.y,50,50)
    }
    this.texte = function(){
        ctx.font = '30px impact'
        ctx.fillStyle = '#555555'
        ctx.fillText("X: "+this.x+" Y: "+this.y, 50,50)
    }
    this.adalt = function(){
        this.y = this.y-this.vel
        }
        this.baix = function(){
            this.y = this.y+this.vel
        }
        this.dreta = function(){
            this.x = this.x+this.vel
        }
        this.esquerra = function(){
            this.x = this.x-this.vel
        }
    
}   
let villano = function(x,y,vel){
    this.x = x;
    this.y = y;
    this.vel= vel;

    this.dibuixa = function(){
    ctx.drawImage(imatge2,this.x,this.y,50,50)
    }
    this.adalt1 = function(){
        this.y = this.y-this.vel
        }
        this.baix1 = function(){
            this.y = this.y+this.vel
        }
        this.dreta1 = function(){
            this.x = this.x+this.vel
        }
        this.esquerra1 = function(){
            this.x = this.x-this.vel
        }
    
}   


    
    let personatge = function(x,y,vel){
        this.x = x;
        this.y = y;
        this.vel = vel;
        this.dreta = true;
    
        this.dibuixa = function(){
           
            ctx.fillRect(this.x,this.y,50,50)
        }
        this.mou = function(){
            console.log(this.x)
    
            if (this.dreta == true){
            if(this.x < 1500){
                this.x = this.x+this.vel
            }else{
            this.dreta = false;
            }
        }else{
          if(this.x > 100){
                this.x = this.x-this.vel
            }else{
                this.dreta = true;
            }
        }
    }

    }
    

    let ismail = new personatge (10,100,1);
    let david = new personatge (350,300,10);
    let pesas = new personatge (10,1000,10);
    let sophie = new prota (200,200,10);
    let grau = new villano (300,300,5)
    document.addEventListener('keydown',function(tecla){
    if(tecla.key == 'w'){
        grau.adalt1()
        
    }

    if(tecla.key == 's'){
        grau.baix1()
        
}

    if(tecla.key == 'd'){
        grau.dreta1()
        
}
    if(tecla.key == 'a'){
        grau.esquerra1()
        
}
})
    document.addEventListener('keydown',function(tecla){
    if(tecla.key == 'ArrowUp'){
        sophie.adalt()
        
    }

    if(tecla.key == 'ArrowDown'){
        sophie.baix()
        
}

    if(tecla.key == 'ArrowRight'){
        sophie.dreta()
        
}
    if(tecla.key == 'ArrowLeft'){
        sophie.esquerra()
        
}
})

function principal(){
    borrarPantalla();
    dibuixaEscenari()
    ismail.dibuixa();
    david.dibuixa();
    pesas.dibuixa();
    sophie.dibuixa();
    grau.dibuixa();
    //PINTAR PERSONATJES
    //MOU PERSONATJES
    ismail.mou();
    david.mou();
    pesas.mou();
    sophie.texte();

}

