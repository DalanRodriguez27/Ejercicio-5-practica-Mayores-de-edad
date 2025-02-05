export default class CL_Control{
    constructor(){
        this.cntPersonas = 0;
        this.cntPersonasMayores = 0;
    }

    procesarPersonas(personas){

        this.cntPersonas++;

        if(personas.edad >= 18){
            this.cntPersonasMayores++;
    }
}

cantidadPersonas(){
    return this.cntPersonas
}

cantidadMayores(){
    return this.cntPersonasMayores
}
porcentajeEdadPersonasMayores(){
    if(this.cntPersonasMayores > 0){
        return (this.cntPersonasMayores / this.cntPersonas *100) + "%";

    }else{
        return 0;
    }
}


}

