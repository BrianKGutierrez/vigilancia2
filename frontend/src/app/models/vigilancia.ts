import { Funcionario } from './funcionario';
import { Dependencia } from './dependencia';
import { Persona } from './persona';

export class Vigilancia {
  _id!: string;
  objetivo: string;
  cant_dias: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  destino: string;
  latitud: string;
  longitud: string;
  turno_asignado: boolean;
  persona: Persona;
  funcionario: Funcionario | null;
  juridiccion: Dependencia;
  vigilancia: string;
  recurso: string;
  prioridad: string;
  observaciones: string;
  activo: boolean;
  archivo?: string;  // Puede ser opcional si no siempre se proporciona

  constructor() {
    this.objetivo = "";
    this.cant_dias = 0;
    this.fecha_inicio = new Date();
    this.fecha_fin = new Date();
    this.destino = "";
    this.latitud = "";
    this.longitud = "";
    this.turno_asignado = false;
    this.persona = new Persona();
    this.funcionario = null;  // Puede ser null si no siempre se proporciona
    this.juridiccion = new Dependencia();
    this.vigilancia = "";
    this.recurso = "";
    this.prioridad = "";
    this.observaciones = "";
    this.activo = true;
    this.archivo = "";  // Opcional
  }
}
