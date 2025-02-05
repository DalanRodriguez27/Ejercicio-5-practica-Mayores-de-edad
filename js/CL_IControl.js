export default class CL_IControl{

    reporteControl(cp, cpm, pmy){
        return`
        <br>Reporte de control
        <br>Cantidad total de personas ${cp}
        <br>Cantidad de personas mayores ${cpm}
        <br>Porcentaje de personas mayores ${pmy}`
    }
}