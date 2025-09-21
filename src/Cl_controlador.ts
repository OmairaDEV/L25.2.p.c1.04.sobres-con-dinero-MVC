import Cl_mGestorSobres from "./Cl_mGestorSobres.js";
import Cl_vGestorSobres from "./Cl_vGestorSobres.js";   

export default class Cl_controlador {
    public modelo: Cl_mGestorSobres;
    public vista: Cl_vGestorSobres;
    constructor (modelo: Cl_mGestorSobres, vista: Cl_vGestorSobres) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarSobre() {
        this.modelo.procesarSobre(this.vista.procesarSobre());
        this.vista.reportarSobre({
            totalDineroSobres: this.modelo.totalDineroSobres()
        });
    }
        
}