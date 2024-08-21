const mongoose = require("mongoose");
const { Schema } = mongoose;

const PersonaSchema = new Schema({
  nombre: { type: String, required: true },          // Usa String en lugar de 'string'
  apellido: { type: String, required: true },        // Usa String en lugar de 'string'
  dni: { type: String, required: true },             // Usa String en lugar de 'string'
  telefono: { type: String, required: true },        // Usa String en lugar de 'string'
  provincia: { type: String, required: true },       // Usa String en lugar de 'string'
  departamento: { type: String, required: true }, // Us
  localidad: { type: String, required: true },       // Usa String en lugar de 'string'
  
  codigoPostal: { type: String, required: true },    // Usa String en lugar de 'string'

  // fechaRegistro: { type: Date, default: Date.now },  // Usa Date para fechas
  domicilio: { type: String, required: true },       // Usa String en lugar de 'string'
  fechaNacimiento: { type: Date, required: true },   // Usa Date para fechas
  sexo: { type: String, required: true },            // Usa String en lugar de 'string'
  edad: { type: Number, required: true }             // Usa Number en lugar de 'string' para edades
});
  
module.exports = mongoose.model('Persona', PersonaSchema);
