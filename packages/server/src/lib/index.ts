import { publicProcedure, router } from "./trpc";
import {drizzle} from "drizzle-orm/better-sqlite3";
import {migrate} from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import {todos} from "./db/schema";
import {z} from "zod";
import { eq } from "drizzle-orm";

// Creating a SQLite database using the better-sqlite3 library
const sqlite = new Database("sqlite.db");

// Creating a drizzle instance using the SQLite database
const db = drizzle(sqlite);
console.log(" connections0000000000000",db); 
console.log("Before migration");

try {
    // Running database migrations using drizzle-orm's migrator
  migrate(db, { migrationsFolder: "../../packages/server/drizzle/"});
  console.log("Migration successful");
} catch (error) {
  console.error("Migration error:", error);
}



// Creating an appRouter instance using tRPC router
export const appRouter = router({
     // Public procedure to fetch all todos
    getTodos: publicProcedure.query(async () => {
        return await db.select().from(todos).all();
    }),
       // Public procedure to add a new todo
    addTodo : publicProcedure.input(z.string()).mutation(async(opts)=>{
      await db.insert(todos).values({content:opts.input,done:0}).run()
      return true;
    }),
        // Public procedure to mark a todo as done
    setDone : publicProcedure.input(z.object({id:z.number(),done:z.number()})).mutation(async(opts)=>{
      await db.update(todos).set({done:opts.input.done}).where(eq(todos.id,opts.input.id)).run()
      return true;
    }),

      // Public procedure to delete a todo
    deleteTodo: publicProcedure.input(z.number()).mutation(async (opts) => {
      await db.delete(todos).where(eq(todos.id, opts.input)).run();
      return true;
    }),

  

});
// Exporting the type of the appRouter
export type AppRouter = typeof appRouter;



