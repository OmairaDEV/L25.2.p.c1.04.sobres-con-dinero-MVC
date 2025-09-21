import Cl_controlador from "./Cl_controlador.js";   
 export default class Cl_vSobre {
    public controlador: Cl_controlador | null = null;
    private inValorBillete: HTMLInputElement;
    private inCantidadBillete: HTMLInputElement
    private btProcesar: HTMLElement;

    constructor() {
        this.inValorBillete = document.getElementById("sobreForm_inValorBillete") as HTMLInputElement;
        this.inCantidadBillete = document.getElementById("sobreForm_inCantidadBillete") as HTMLInputElement;  
        this.btProcesar = document.getElementById("sobreForm_btProcesar") as HTMLElement;
        
        //validar que los elemntos existan
        if (!this.inValorBillete || !this.inCantidadBillete || !this.btProcesar) 
            throw new Error("No se encontraron los elementos del formulario");
            this.btProcesar.onclick = () => {
                if (!this.controlador) throw new Error("Controlador no asignado");  
                this.controlador.procesarSobre();
            };
        }   
        get valorBillete(): number {
            if(!this.inValorBillete) throw new Error("Elemento inValorBillete no encontrado");
            return this.inValorBillete.value;
        }
        get cantidadBillete(): number {
            if(!this.inCantidadBillete) throw new Error("Elemento inCantidadBillete no encontrado");
            return this.inCantidadBillete.value;
        }
    }