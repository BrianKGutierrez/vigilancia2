const express = require('express');
const router = express.Router();
const dependenciaCtrl = require('./../controllers/dependencia.controller');

// Definir las rutas para la gestión de dependencias
router.get('/', dependenciaCtrl.getDependencias);
router.post('/', dependenciaCtrl.createDependencia);
router.get('/:id', dependenciaCtrl.getDependencia);
router.put('/:id', dependenciaCtrl.editDependencia);
router.delete('/:id', dependenciaCtrl.deleteDependencia);

module.exports = router;
