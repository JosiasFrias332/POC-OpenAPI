"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_2 = require("@trpc/server/adapters/express");
const appRouter_1 = require("./appRouter");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
const puerto = 4000;
// middleware de Swagger 
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
// middleware para solicitudes JSON
app.use(express_1.default.json());
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
app.use('/trpc', (0, express_2.createExpressMiddleware)({
    router: appRouter_1.appRouter,
    createContext: () => ({}),
}));
app.listen(puerto, () => {
    console.log(`Servidor escuchando en el puerto: ${puerto}`);
});
