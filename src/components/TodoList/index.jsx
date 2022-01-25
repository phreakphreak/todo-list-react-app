import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  if (todos.length === 0) return null;

  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default TodoList;
