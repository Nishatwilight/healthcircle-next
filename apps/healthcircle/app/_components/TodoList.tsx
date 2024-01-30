'use client'

import { trpc } from "../api/trpc/[trpc]/_trpc/client"

export default function TodoList () {
    const getTodos = trpc.getTodos.useQuery();

return (
    <div>
        <div>{JSON.stringify(getTodos.data)}</div>
    </div>
)
}