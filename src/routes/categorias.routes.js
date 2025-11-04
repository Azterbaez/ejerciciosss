import { Router } from 'express';
import {obtenerCategorias, obtenerCategoria,registrarCategoria, eliminarCategoria, actualizarCategoria} from '../controllers/categorias.controllers.js';

const router = Router();

// Rutas
router.get ('/categorias', obtenerCategorias);
// ruta por id
router.get ('/categoria/:id_categoria',obtenerCategoria); 

// Ruta para registrar una nueva Categoría
router.post('/registrarcategoria', registrarCategoria);

router.delete('/eliminarcategoria/:id_categoria',eliminarCategoria);

// Ruta para actualizar una Categoría por su ID
router.patch('/actualizarcategoria/:id_categoria', actualizarCategoria);



export default router;

  