export default class CL_Personas{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    set nombre(n){
        return  this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set edad(e){
        return this._edad = e;
    }

    get edad(){ 
        return this._edad;
    }
    
}