import TodoList from '../TodoList';
import TodoForm from '../TodoForm';
import { useSemiPersistentState } from '../../hooks';

const Todo = () => {
  const [todos, setTodos] = useSemiPersistentState({
    key: 'todos',
    initialState: [],
  });

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <section>
      <div className="flex flex-col max-w-md p-10 mx-auto my-10 rounded-lg shadow-sm bg-slate-800 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </section>
  );
};

export default Todo;
