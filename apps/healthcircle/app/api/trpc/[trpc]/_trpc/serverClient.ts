import { httpBatchLink } from "@trpc/client";
import { appRouter } from "../../../../../../../packages/server/src/index";
 


export const serverClient = appRouter.createCaller({
    links:[
        httpBatchLink({
            url: "http://localhost:4200/api/trpc", 
        })
    ]
})