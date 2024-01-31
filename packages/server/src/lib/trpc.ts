
  /**
   * @description :Initializes a tRPC  instance for building TypeScript-powered APIs.
   * Exports a tRPC router and a utility function for defining public procedures in the API.
   * The router is used to define API routes, while the publicProcedure function facilitates
   */

import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

// Accessing router and publicProcedure from the tRPC instance
export const router = t.router;
export const publicProcedure = t.procedure;


