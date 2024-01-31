
import type { Config } from "drizzle-kit";

 export default {
 schema: "./packages/server/src/lib/db/schema.ts",
 out: "./packages/server/drizzle",
 driver: "better-sqlite",
 dbCredentials: {
  url: "sqlite.db",
},

} satisfies Config;