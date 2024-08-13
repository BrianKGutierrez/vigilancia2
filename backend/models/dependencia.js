const mongoose = require("mongoose");
const { Schema } = mongoose;

const DependenciaSchema = new Schema({
    juridiccion: { type: String, required: true },
    localidad: { type: String, required: true },
    domicilio: { type: String, required: true }, // Agregué required: true para ser consistente
    jefe: { type: String, required: true },
    unidad_regional: { type: String, required: true },
});

module.exports = mongoose.model('Dependencia', DependenciaSchema);
