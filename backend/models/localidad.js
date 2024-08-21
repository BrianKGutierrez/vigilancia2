const mongoose = require("mongoose");
const { Schema } = mongoose;

const LocalidadSchema = new Schema({
    nombre:{type:String},
   latitud:{type:String},
   longitud:{type:String}
});

module.exports = mongoose.model('Localidad', LocalidadSchema);