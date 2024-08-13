export class Persona {
    _id!: string;
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    provincia: string;
    localidad: string;
    codigoPostal: string;
    fechaRegistro: Date;
    domicilio: string;
    fechaNacimiento: Date;
    sexo: string;
    edad: number;

    constructor() {
        this._id = '';
        this.nombre = '';
        this.apellido = '';
        this.dni = '';
        this.telefono = '';
        this.provincia = '';
        this.localidad = '';
        this.codigoPostal = '';
        this.fechaRegistro = new Date();
        this.domicilio = '';
        this.fechaNacimiento = new Date();
        this.sexo = '';
        this.edad = 0;
    }
}
