const mongoose = require("mongoose");
const { Persona } = require('./persona');

const { Schema } = mongoose;

const FuncionarioSchema = new Schema({
    cargo: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date },
    activo: { type: Boolean, required: true, default: true },
    // Relación con Persona
    persona: { type: Schema.Types.ObjectId, ref: 'Persona', required: true }
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);
