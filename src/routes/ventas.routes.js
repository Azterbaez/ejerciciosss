import { Router } from "express";
import { obtenerVentas, obtenerVenta, registrarVenta, eliminarVenta, actualizarVenta } from "../controllers/ventas.controllers.js";

const router = Router();

// Rutas
router.get('/ventas', obtenerVentas);   
router.get('/venta/:id_venta', obtenerVenta);
router.post('/registrarventa', registrarVenta);
router.delete('/eliminarventa/:id_venta', eliminarVenta);
router.patch('/actualizarventa/:id_venta', actualizarVenta);

export default router;