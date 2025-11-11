import { pool } from '../../db.connection.js';

// Obtener todas las ventas
export const obtenerVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de ventas.',
            error: error
        });
    }
};

// Obtener una venta por su ID
export const obtenerVenta = async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const [result] = await pool.query('SELECT * FROM ventas WHERE id_venta = ?', [id_venta]);
        if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_venta} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de la venta.',
            error: error
        });
    }
};

// Registrar una nueva venta
export const registrarVenta = async (req, res) => {
    try {
        const { fecha_venta, total_venta, id_cliente } = req.body;
        const [result] = await pool.query(
            'INSERT INTO ventas (fecha_venta, total_venta, id_cliente) VALUES (?, ?, ?)',
            [fecha_venta, total_venta, id_cliente]
        );
        res.status(201).json({ id_venta: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la venta.',
            error: error
        });
    }
};

// Eliminar una venta
export const eliminarVenta = async (req, res) => {
    try {
        const id_venta = req.params.id_venta;
        const [result] = await pool.query('DELETE FROM ventas WHERE id_venta = ?', [id_venta]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Error al eliminar la venta. El ID ${id_venta} no fue encontrado.`
            });
        }
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al eliminar la venta.',
            error: error
        });
    }
};

// Actualizar una venta
export const actualizarVenta = async (req, res) => {
    try {
        const { id_venta } = req.params;
        const datos = req.body;

        const [result] = await pool.query(
            'UPDATE ventas SET ? WHERE id_venta = ?',
            [datos, id_venta]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                mensaje: `Venta con ID ${id_venta} no encontrada.`
            });
        }

        res.status(200).json({
            mensaje: `Venta con ID ${id_venta} actualizada.`
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la venta.', error });
    }
};
