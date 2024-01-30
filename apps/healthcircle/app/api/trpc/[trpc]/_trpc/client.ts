import {createTRPCReact } from "@trpc/react-query";

import { type AppRouter} from "@healthcircle/server"

export const trpc =  createTRPCReact<AppRouter>({});
 