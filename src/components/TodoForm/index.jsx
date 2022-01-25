import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import uuid4 from 'uuid4';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    const text = value.trim();
    if (text) {
      const todo = {
        id: uuid4(),
        text,
        completed: false,
      };
      addTodo(todo);
      setValue('');
    }
  };

  return (
    <div className="flex items-center px-10">
      <input
        type="text"
        className="flex-initial w-3/4 h-12 px-4 py-3 mb-3 leading-tight text-white bg-transparent border rounded-sm appearance-none xl:w-4/5 border-violet-600 focus:outline-none"
        placeholder="Write your task"
        onChange={handleChange}
        value={value}
      />
      <button
        className="flex items-center h-12 gap-2 px-4 py-3 mb-3 text-sm text-white rounded-sm shadow-sm appearance-none w-fit bg-gradient-to-r from-violet-700 to-violet-600 hover:from-violet-600 hover:to-violet-500 xl:px-6 xl:gap-4 xl:w-1/5"
        onClick={handleClick}
      >
        <i>
          <MdAdd className="text-base" />
        </i>
        <span>Add Todo</span>
      </button>
    </div>
  );
};

export default TodoForm;
