const Personal = require('../models/personal'); // Asegúrate de que la ruta sea correcta
const personalCtrl = {};

// Obtener todos los personales
personalCtrl.getPersonales = async (req, res) => {
    try {
        const personales = await Personal.find();
        res.json(personales);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener personales.'
        });
    }
};

// Crear un nuevo personal
personalCtrl.createPersonal = async (req, res) => {
    const personal = new Personal(req.body);
    try {
        await personal.save();
        res.json({
            'status': '1',
            'msg': 'Personal guardado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar personal.'
        });
    }
};

// Obtener un personal por ID
personalCtrl.getPersonal = async (req, res) => {
    try {
        const personal = await Personal.findById(req.params.id);
        if (!personal) {
            return res.status(404).json({
                'status': '0',
                'msg': 'Personal no encontrado.'
            });
        }
        res.json(personal);
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al obtener el personal.'
        });
    }
};

// Editar un personal
personalCtrl.editPersonal = async (req, res) => {
    try {
        const updatedPersonal = await Personal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPersonal) {
            return res.status(404).json({
                'status': '0',
                'msg': 'Personal no encontrado.'
            });
        }
        res.json({
            'status': '1',
            'msg': 'Personal actualizado.',
            'data': updatedPersonal
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar personal.'
        });
    }
};

// Eliminar un personal
personalCtrl.deletePersonal = async (req, res) => {
    try {
        const deletedPersonal = await Personal.findByIdAndDelete(req.params.id);
        if (!deletedPersonal) {
            return res.status(404).json({
                'status': '0',
                'msg': 'Personal no encontrado.'
            });
        }
        res.json({
            'status': '1',
            'msg': 'Personal eliminado.'
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar personal.'
        });
    }
};

module.exports = personalCtrl;
