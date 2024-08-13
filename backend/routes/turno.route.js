const express = require('express');
const router = express.Router();
const turnoCtrl = require('../controllers/turno.controller');

// Definir rutas para el CRUD de Turnos
router.get('/', turnoCtrl.getTurnos);
router.post('/', turnoCtrl.createTurno);
router.get('/:id', turnoCtrl.getTurno);
router.put('/:id', turnoCtrl.editTurno);
router.delete('/:id', turnoCtrl.deleteTurno);

module.exports = router;
