import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './appRouter';
import swaggerDocument from './swagger.json';

const app = express();
const puerto = 4000;

// middleware de Swagger 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// middleware para solicitudes JSON
app.use(express.json());

// endpoints
app.put('/change-user', (req, res) => {
    res.send('cambiar usuario');
});

app.delete('/delete-user', (req, res) => {
    res.send('eliminar usuario');
});

app.get('/', (req, res) => {
    res.send('hola');
});

app.post('/new-user', (req, res) => {
    res.send('nuevo usuario');
});

// middleware de tRPC
app.use(
    '/trpc',
    createExpressMiddleware({
        router: appRouter,
        createContext: () => ({}), 
    })
);

app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto: ${puerto}`);
});
