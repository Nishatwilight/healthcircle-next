import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    getTodos: publicProcedure.query(async () => {
        return [10,50,67,90,77];
    }),
});

export type AppRouter = typeof appRouter;
