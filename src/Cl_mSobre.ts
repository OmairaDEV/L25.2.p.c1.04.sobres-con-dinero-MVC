export default class Cl_mSobre {
    private _valorBillete: number= 0;
    private _cantidadBillete: number= 0;

    constructor({valorBillete= 0, cantidadBillete= 0}) {
        this._valorBillete = valorBillete;
        this._cantidadBillete = cantidadBillete;
    }

    public set valorBillete(valorBillete: number) {
        this._valorBillete = valorBillete;
    }

    public get valorBillete(): number {
        return this._valorBillete;
    }

   public  set cantidadBillete(cantidadBillete: number) {
        this._cantidadBillete = cantidadBillete;
    }

   public get cantidadBillete(): number {
        return this._cantidadBillete;
    }

    public dineroSobre(): number {
        return this._valorBillete * this._cantidadBillete;
    }
}