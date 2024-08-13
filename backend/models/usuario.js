const mongoose = require("mongoose");
const { Persona } = require('./persona');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    email: { type: String, required: true },
    usuario: { type: String, required: true }, // Debe estar presente y ser requerido
    password: { type: String, required: true },
    activo: { type: Boolean, required: true, default: false },
    perfil: { type: String, required: true },
    persona:{type:Schema.Types.ObjectId,ref:'Persona', required: true}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);