import { z } from 'zod';
import { router, procedure } from './trpc.js';

export const appRouter = router({

  newUser: procedure
    .input(z.object({ name: z.string(), email: z.string().email() }))
    .mutation(({ input }) => {
      return `Nuevo usuario creado: ${input.name}`;
    }),

  changeUser: procedure
    .input(z.object({ userId: z.string(), newName: z.string() }))
    .mutation(({ input }) => {
      return `Usuario ${input.userId} cambiado a ${input.newName}`;
    }),

  deleteUser: procedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ input }) => {
      return `Usuario ${input.userId} eliminado`;
    }),

  hello: procedure.query(() => {
    return 'hola desde tRPC';
  }),
});

export type AppRouter = typeof appRouter;
