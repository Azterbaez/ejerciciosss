import { Router } from 'express';
import {obtenerCategorias, obtenerCategoria,registrarCategoria} from '../controllers/categorias.controllers.js';

const router = Router();

// Rutas
router.get ('/categorias', obtenerCategorias);
// ruta por id
router.get ('/categoria/:id_categoria',obtenerCategoria); 

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);

export default router;

