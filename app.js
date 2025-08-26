import express from 'express';
import cors from 'cors';

import rutasCategorias from'./src/routes/categorias.routes.js';

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