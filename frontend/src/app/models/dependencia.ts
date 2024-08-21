import { Persona } from "./persona";

export class Dependencia {
    _id!: string;
    juridiccion: string;
    localidad: string;
    domicilio: string;
    jefe: Persona;
    unidad_regional: string;
  
    constructor() {
      this.juridiccion = "";
      this.localidad = "";
      this.domicilio = "";
      this.jefe = new Persona();
      this.unidad_regional = "";
    }
  }
  