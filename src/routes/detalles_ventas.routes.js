import { Router } from "express";
import { obtenerDetallesVentas, obtenerDetalleVenta, registrarDetalleVenta, eliminarDetalleVenta,actualizarDetalleVenta } from "../controllers/detalles_ventas.controllers.js";

const router = Router();
// Rutas
router.get('/detalles_ventas', obtenerDetallesVentas);   
router.get('/detalle_venta/:id_detalle_venta', obtenerDetalleVenta);
router.post('/registrarDetalleVenta', registrarDetalleVenta);
router.delete('/eliminarDetalleVenta/:id_detalle_venta', eliminarDetalleVenta);
router.patch('/actualizarDetalleVenta/:id_detalle_venta', actualizarDetalleVenta);


export default router;