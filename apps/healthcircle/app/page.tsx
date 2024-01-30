import TodoList from './_components/TodoList';
import './global.css';

export default async function Index() {
  return (
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
          <h1 className="text-3xl font-bold underline bg-red-500">
             Hello world!
            </h1>
            <h1 className="bg-customText1">
            <TodoList></TodoList>
            </h1>
          </div>
        </div>
      </div>
      
  );
}
