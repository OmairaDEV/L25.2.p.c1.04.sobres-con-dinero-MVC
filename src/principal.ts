import Cl_vGestorSobres from "./Cl_vGestorSobres.js";
import Cl_mGestorSobres from "./Cl_mGestorSobres.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
 constructor() {
        const vista = new Cl_vGestorSobres();
        const modelo = new Cl_mGestorSobres();
        const controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}