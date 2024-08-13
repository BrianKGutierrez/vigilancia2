const Persona = require('../models/persona');
const personaCtrl = {};

// Obtener todas las personas
personaCtrl.getPersonas = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.json(personas);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener personas.'
        });
    }
};

// Crear una nueva persona
personaCtrl.createPersona = async (req, res) => {
    var persona = new Persona(req.body);
    try {
        await persona.save();
        res.json({
            'status': '1',
            'msg': 'Persona guardada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar persona.'
        });
    }
};

// Obtener una persona por ID
personaCtrl.getPersona = async (req, res) => {
    try {
        const persona = await Persona.findById(req.params.id);
        res.json(persona);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener la persona.'
        });
    }
};

// Editar una persona
personaCtrl.editPersona = async (req, res) => {
    const vPersona = new Persona(req.body);
    try {
        await Persona.updateOne({_id: req.body._id}, vPersona);
        res.json({
            'status': '1',
            'msg': 'Persona actualizada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar persona.'
        });
    }
};

// Eliminar una persona
personaCtrl.deletePersona = async (req, res) => {
    try {
        await Persona.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Persona eliminada.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar persona.'
        });
    }
};

module.exports = personaCtrl;
