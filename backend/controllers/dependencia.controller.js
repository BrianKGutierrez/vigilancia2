const Dependencia = require('../models/dependencia');
const dependenciaCtrl = {};

// Obtener todas las dependencias
// Obtener todas las dependencias
dependenciaCtrl.getDependencias = async (req, res) => {
    try {
        const dependencias = await Dependencia.find().populate('jefe');
        res.json(dependencias);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener dependencias.'
        });
    }
};


// Crear una nueva dependencia
dependenciaCtrl.createDependencia = async (req, res) => {
    var dependencia = new Dependencia(req.body);
    try {
        await dependencia.save();
        res.json({
            'status': '1',
            'msg': 'Dependencia guardada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar dependencia.'
        });
    }
};

// Obtener una dependencia por ID
// Obtener una dependencia por ID
dependenciaCtrl.getDependencia = async (req, res) => {
    try {
        const dependencia = await Dependencia.findById(req.params.id).populate('jefe');
        res.json(dependencia);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener la dependencia.'
        });
    }
};


// Editar una dependencia
dependenciaCtrl.editDependencia = async (req, res) => {
    const vDependencia = new Dependencia(req.body);
    try {
        await Dependencia.updateOne({_id: req.body._id}, vDependencia);
        res.json({
            'status': '1',
            'msg': 'Dependencia actualizada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar dependencia.'
        });
    }
};

// Eliminar una dependencia
dependenciaCtrl.deleteDependencia = async (req, res) => {
    try {
        await Dependencia.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Dependencia eliminada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar dependencia.'
        });
    }
};

module.exports = dependenciaCtrl;
