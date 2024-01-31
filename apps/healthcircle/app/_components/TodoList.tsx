'use client'

import { trpc } from "../api/trpc/[trpc]/_trpc/client"
import { useState } from "react";
import { serverClient } from "../api/trpc/[trpc]/_trpc/serverClient";

export default function TodoList({
  initialTodos,
}: {
  initialTodos: Awaited<ReturnType<(typeof serverClient)["getTodos"]>>;
}) {
  const getTodos = trpc.getTodos.useQuery(undefined, {
    initialData: initialTodos,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const setDone = trpc.setDone.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const deleteTodo = trpc.deleteTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const [content, setContent] = useState("");

  return (
    <>
      <div className="container">
        <div className="centered">
          <div>
            {getTodos?.data?.map((todo) => (
              <div key={todo.id} className="todo-item">
                <input
                  id={`check-${todo.id}`}
                  type="checkbox"
                  checked={!!todo.done}
                  onChange={async () => {
                    setDone.mutate({
                      id: todo.id,
                      done: todo.done ? 0 : 1,
                    });
                  }}
                  style={{ zoom: 1.5 }}
                ></input>
                <label htmlFor={`check-${todo.id}`}>{todo.content}</label>
                <button
                  className="delete-button"
                  onClick={async () => {
                    deleteTodo.mutate(todo.id);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="centered">
          <label htmlFor="content">Content:</label>
          <input
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button
            onClick={async () => {
              addTodo.mutate(content);
              setContent("");
            }}
          >
            Add Todo
          </button>
        </div>
      </div>

      <style jsx>{`
                 .container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  height: 80vh; /* Adjust the height based on your layout */
                }
          
                .centered {
                  display: flex;
                  align-items: center;
                  margin-bottom: 5px;
                }
          
                label {
                  margin-right: 8px;
                  color: #333;
                }
          
                button {
                  background-color: #4CAF50;
                  color: white;
                  padding: 10px 15px;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                }

        .todo-item {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }

        .delete-button {
          background-color: #ff6666;
          color: white;
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          margin-left: 5px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}