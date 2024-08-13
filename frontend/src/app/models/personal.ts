import { Dependencia } from './dependencia';
import { Persona } from './persona';

export class Personal {
  _id!: string;
  legajo: string;
  jerarquia: string;
  dependencia: Dependencia;
  persona: Persona;

  constructor() {
    this.legajo = "";
    this.jerarquia = "";
    this.dependencia = new Dependencia();
    this.persona = new Persona();
  }
}
