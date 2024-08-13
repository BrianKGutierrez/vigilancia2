const express = require('express');
const router = express.Router();
const vigilanciaCtrl = require('../controllers/vigilancia.controller');
const upload = require('../middlewares/uploads');

// Definir rutas para el CRUD de Vigilancia
router.get('/', vigilanciaCtrl.getVigilancias);
router.post('/', upload.single('archivo'), vigilanciaCtrl.createVigilancia);
router.get('/:id', vigilanciaCtrl.getVigilancia);
router.put('/:id', upload.single('archivo'), vigilanciaCtrl.editVigilancia);
router.delete('/:id', vigilanciaCtrl.deleteVigilancia);

module.exports = router;
