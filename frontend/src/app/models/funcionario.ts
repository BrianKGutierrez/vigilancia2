import { Persona } from './persona';

export class Funcionario {
  _id!: string;
  cargo: string;
  fecha_inicio: Date;
  fecha_fin?: Date;
  activo: boolean;
  persona: Persona;

  constructor() {
    this.cargo = "";
    this.fecha_inicio = new Date();
    this.fecha_fin = undefined; // Opcional, puede ser undefined
    this.activo = true;
    this.persona = new Persona(); // Asumiendo que Persona tiene un constructor vacío
  }
}
