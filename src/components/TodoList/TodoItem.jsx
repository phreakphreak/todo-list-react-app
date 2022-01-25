const TodoItem = ({ todo }) => {
  return (
    <div className="mx-auto px-4 py-4 my-8 leading-tight text-white rounded-md shadow-sm h-14 bg-gradient-to-r from-indigo-500 via-pink-500 to-cyan-400 ">
      {todo?.text}
    </div>
  );
};

export default TodoItem;
