import express from 'express';
import cors from 'cors';

import rutasCategorias from'./src/routes/categorias.routes.js';
import rutasClientes from'./src/routes/clientes.routes.js';
import rutasUsuarios from'./src/routes/usuarios.routes.js';
import rutasEmpleados from'./src/routes/empleados.routes.js';
import rutasVentas from'./src/routes/ventas.routes.js';
import rutasDetallesVentas from'./src/routes/detalles_ventas.routes.js';
import rutasProductos from'./src/routes/productos.routes.js';



const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['content-Type'],
}));

app.use(express.json({ limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true}));

app.use('/api', rutasCategorias);
app.use('/api', rutasClientes);
app.use('/api', rutasUsuarios);
app.use('/api', rutasEmpleados);
app.use('/api', rutasVentas);
app.use('/api', rutasDetallesVentas);
app.use('/api', rutasProductos);

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'Laruta que ha especificado no se encuentra registrada.'

    });
});
export default app;