import TodoList from './_components/TodoList';
import {serverClient} from './api/trpc/[trpc]/_trpc/serverClient'
import './global.css';

export default async function Index() {
  const todos = await serverClient.getTodos()
  return (
       <><div className='bg-custom-text2'>hello tailwind works!</div><div>
      <TodoList initialTodos={todos}></TodoList>
    </div></>
   
      
  );
}
