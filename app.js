import express from 'express';
import cors from 'cors';

import rutasCategorias from'./src/routes/categorias.routes.js';
import rutasClientes from './src/routes/clientes.routes.js'
import rutasCompras from './src/routes/compras.routes.js'
import rutasDetalles_compras from './src/routes/detalles_compras.routes.js'
import rutasDetalles_ventas from './src/routes/detalles_ventas.routes.js'
import rutasEmpleados from './src/routes/empleados.routes.js'
import rutasProductos from './src/routes/productos.routes.js'
import rutasUsuarios from './src/routes/usuarios.routes.js'
import rutasVentas from './src/routes/ventas.routes.js'

const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['content-Type'],
}));

app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true}));

app.use('/api', rutasCategorias);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Laruta que ha especificado no se encuentra registrada.'

    });
});
export default app;