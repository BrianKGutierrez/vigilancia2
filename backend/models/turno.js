const mongoose = require("mongoose");
const { Schema } = mongoose;

// Importa los modelos de Funcionario y Dependencia si necesitas referenciarlos
const { Personal } = require('./personal');
const{Vigilancia}=require('./vigilancia');

const TurnoSchema = new Schema({
    horainicio: { type: Date, required: true },
    horafin: { type: Date, required: true },
    fechainicio: { type: Date, required: true },
    fechafin: { type: Date, required: true },
    observaciones: { type: String },
    activo: { type:Boolean,required:true}, // Enum para restringir los valores
    personal: { type: Schema.Types.ObjectId, ref: 'Personal', required: true },
    vigilancia: { type: Schema.Types.ObjectId, ref: 'Vigilancia', required: true }, // Referencia a otra Vigilancia
});

module.exports = mongoose.model('Turno', TurnoSchema);
