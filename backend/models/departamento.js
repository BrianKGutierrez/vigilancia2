const mongoose = require("mongoose");
const { Localidad} = require('./localidad');


const { Schema } = mongoose;

const DepartamentoSchema = new Schema({
    nombre:{type:String},
    localidad:{type:Schema.Types.ObjectId,ref:'Localidad'}
});

module.exports = mongoose.model('Departamento', DepartamentoSchema);