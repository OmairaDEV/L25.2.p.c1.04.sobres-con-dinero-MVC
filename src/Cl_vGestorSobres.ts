import Cl_vSobre from "./Cl_vSobre.js";  
import Cl_mSobre from "./Cl_mSobre.js"; 
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_vGestorSobres {
    private _controlador: Cl_controlador | null = null;
    private salida: HTMLElement;
    private vSobre: Cl_vSobre;
    private mSobre: Cl_mSobre | null = null;
    constructor() {
        this.salida = document.getElementById("salida") as HTMLElement;
        if(!this.salida) throw new Error("Elemento salida no encontrado");
        this.vSobre = new Cl_vSobre();
        
    }
    set controlador(controlador: Cl_controlador | null) {
        this._controlador = controlador;
        this.vSobre.controlador = controlador;
    }
    get controlador(): Cl_controlador | null {
        return this._controlador;
    }
    procesarSobre(): Cl_mSobre {
        this.mSobre = new Cl_mSobre({   
            valorBillete: this.vSobre.valorBillete,
            cantidadBillete: this.vSobre.cantidadBillete
        });
        return this.mSobre;
    }
    reportarSobre({
        totalDineroSobres = 0
        cantiddadBilletes10 = 0
    }): void {
        if(!this.mSobre) throw new Error("No se ha procesado ningun sobre");
        this.salida.innerHTML += `<br><br> El sobre tiene: $ ${this.mSobre.dineroSobre()} <br><br> El total de 
        todos los sobres es de: $ ${totalDineroSobres}<br><br> La cantidad de billetes de 10 es: ${cantiddadBilletes10}
        `;
    }

}