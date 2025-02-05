import CL_Control from "./CL_Control.js";
import CL_IControl from "./CL_IControl.js";
import CL_Personas from "./CL_Personas.js";
import CL_IPersonas from "./CL_IPersonas.js";


let iControl = new CL_IControl(),
control = new CL_Control(),
salida = document.getElementById("salida");


let opc = 1;
while(opc == 1){
    let iPersonas = new CL_IPersonas(),
    n = iPersonas.leerNombre(),
        e = iPersonas.leerEdad(),
        personas = new CL_Personas(n, e);

        control.procesarPersonas(personas);

        opc = iPersonas.solicitarOpcion();
    
}

salida.innerHTML = iControl.reporteControl(control.cantidadPersonas(), control.cantidadMayores(), control.porcentajeEdadPersonasMayores());