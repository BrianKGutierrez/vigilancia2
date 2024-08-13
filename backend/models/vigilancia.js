const mongoose = require("mongoose");
const { Funcionario} = require('./funcionario');
const { Dependencia} = require('./dependencia');

const { Schema } = mongoose;

const VigilanciaSchema = new Schema({
    objetivo:{type:String,required:true},
    cant_dias:{type:Number,required:true},
    fecha_inicio:{type: Date,required: true},
    fecha_fin:{type:Date,required:true},
    destino:{type:String,required:true},
    latitud:{type:String, required: true},
    longitud:{type:String, required: true},
    turno_asignado:{type:Boolean,required:true,default:false},
    persona:{type:Schema.Types.ObjectId,ref:'Persona',required:true},
    funcionario:{type:Schema.Types.ObjectId,ref:'Funcionario'},
    juridiccion:{type:Schema.Types.ObjectId,ref:'Dependencia',required:true},
    vigilancia:{type:String,required:true},
    recurso:{type:String,required:true},
    prioridad:{type:String,required:true},
    observaciones:{type:String,required:true},
    activo:{type:Boolean,required:true,default:true},
    archivo:{type:String}
    // fecha_creacion:{type:Date, required: true, default: Date.now},
    // fecha_modificacion:{type:Date, required: true, default: Date.now},

});

module.exports = mongoose.model('Vigilancia', VigilanciaSchema);