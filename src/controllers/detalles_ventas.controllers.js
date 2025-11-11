import { pool } from '../../db.connection.js';

// Obtener todos los detalles de ventas
export const obtenerDetallesVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_Ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los detalles de ventas.',
            error: error
        });
    }
};

// Obtener un detalle de venta por su ID
export const obtenerDetalleVenta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query('SELECT * FROM Detalles_Ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Detalle de venta con ID ${id_detalle_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer el detalle de venta.',
            error: error
        });
    }
};

// Registrar un nuevo detalle de venta
export const registrarDetalleVenta = async (req, res) => {
    try {
        const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
        const [result] = await pool.query(
            'INSERT INTO Detalles_Ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
            [id_venta, id_producto, cantidad, precio_unitario]
        );
        res.status(201).json({ id_detalle_venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar el detalle de venta.',
            error: error
        });
    }
};

// Eliminar un detalle de venta
export const eliminarDetalleVenta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query('DELETE FROM Detalles_Ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar el detalle de venta. El ID ${id_detalle_venta} no fue encontrado.`
            });
        }
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar el detalle de venta.',
            error: error
        });
    }
};

// Actualizar un detalle de venta
export const actualizarDetalleVenta = async (req, res) => {
    try {
        const { id_detalle_venta } = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE Detalles_Ventas SET ? WHERE id_detalle_venta = ?',
            [datos, id_detalle_venta]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Detalle de venta con ID ${id_detalle_venta} no encontrado.`
            });
        }

        res.status(200).json({
            mensaje: `Detalle de venta con ID ${id_detalle_venta} actualizado.`
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el detalle de venta.', error });
    }
};
