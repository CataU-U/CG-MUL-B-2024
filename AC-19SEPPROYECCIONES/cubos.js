
function creavertices (ancho, alto){
    if( ancho<=0||alto<=0){
        return "El ancho debe ser positivo";}
        const Ver1={x:0,y:0};
        const Ver2={x:ancho,y:0};
        const Ver3={x:0,y:alto};
        const Ver4={x:ancho,y:alto};
}
class Linea {
    constructor(ancho, alto,context) {
        this.vertices=this.creavertices(ancho,alto);
        this.contexto=contexto;}
        creavertices(ancho,alto){
            const Ver1={x:0,y:0};
            const Ver2={x:ancho,y:0};
            const Ver3={x:0,y:alto};
            const Ver4={x:ancho,y:alto};
            return[Ver1,Ver2,Ver3,Ver4];
        }
        dibujarLinea(inicio,fin){
            this.contexto.beginPath();
            this.contecto.moveTo(inicio.x,inicio.y);
            this.contexto.lineTo(fin.x,fin.y);
            this.contexto.stroke();
        }
    }

class Cuadrado{
    constructor(ancho,contexto){
        this.ancho=ancho;
        this.contecto=contexo;
        this.Linea= new Linea(ancho,ancho,contexto);
    }
    dibujar(){
        this.Linea.dibujarLinea(this.vertices[0],this.vertices[1]);
        this.Linea.dibujarLinea(this.vertices[1],this.vertices[2]);
        this.Linea.dibujarLinea(this.vertices[2],this.vertices[3]);
        this.Linea.dibujarLinea(this.vertices[3],this.vertices[0]);
    }
}
