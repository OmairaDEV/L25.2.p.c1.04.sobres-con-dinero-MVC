import Cl_mSobre from "./Cl_mSobre.js";

export default class Cl_mGestorSobres {
    private acDineroSobres: number = 0;
    private cntBilletes10: number = 0;
    constructor() {}
   public  procesarSobre(sobre: Cl_sobre) {
        this.acDineroSobres += sobre.dineroSobre(); 
        if(sobre.valorBillete === 10) {
            this.cntBilletes10 ++;
            else if(sobre.valorBillete === 20) {
                this.cntBilletes20 ++;
            } else if(sobre.valorBillete === 50) {
                this.cntBilletes50 ++;
            } else if(sobre.valorBillete === 100) {
                this.cntBilletes100 ++;
        }
    }
    public cantidadBilletes10(): number {
        return this.cntBilletes10;
    }

    public totalDineroSobres(): number {
        return this.acDineroSobres;
    }
}