"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const zod_1 = require("zod");
const trpc_js_1 = require("./trpc.js");
exports.appRouter = (0, trpc_js_1.router)({
    newUser: trpc_js_1.procedure
        .input(zod_1.z.object({ name: zod_1.z.string(), email: zod_1.z.string().email() }))
        .mutation(({ input }) => {
        return `Nuevo usuario creado: ${input.name}`;
    }),
    changeUser: trpc_js_1.procedure
        .input(zod_1.z.object({ userId: zod_1.z.string(), newName: zod_1.z.string() }))
        .mutation(({ input }) => {
        return `Usuario ${input.userId} cambiado a ${input.newName}`;
    }),
    deleteUser: trpc_js_1.procedure
        .input(zod_1.z.object({ userId: zod_1.z.string() }))
        .mutation(({ input }) => {
        return `Usuario ${input.userId} eliminado`;
    }),
    hello: trpc_js_1.procedure.query(() => {
        return 'hola desde tRPC';
    }),
});
