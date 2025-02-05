export default class CL_IPersonas{

    leerNombre(){
        return prompt("Ingrese el nombre de la persona");


    }

    leerEdad(){
        return prompt("Ingrese la edad de la persona");
    }

    solicitarOpcion(){
        return prompt("Desea procesar otra persona?: 1-->Si 2-->No");
    }
}