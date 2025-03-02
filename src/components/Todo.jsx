import React, { useEffect, useRef, useState } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';

const Todo = ({ darkMode }) => {
  const [todoList, setTodoList] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  );
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = { id: Date.now().toString(), text: inputText, isComplete: false };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  const clearAll = () => {
    setTodoList([]);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className={`w-11/12 max-w-md p-7 min-h-[550px] rounded-3xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img className='w-8' src={todo_icon} alt="todo icon" />
          <h1 className='text-3xl font-semibold'>To-Do List</h1>
        </div>
        {todoList.length > 0 && (
          <button onClick={clearAll} className='text-sm text-red-500 hover:text-red-700'>Clear All</button>
        )}
      </div>

      {/* Input Section */}
      <div className={`flex items-center my-4 rounded-full px-4 py-2 w-full max-w-lg mx-auto ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
        <input
          ref={inputRef}
          className={`border-0 outline-none flex-1 h-12 pl-4 pr-2 text-sm sm:text-base 
    ${darkMode ? "bg-gray-700 text-white placeholder-gray-400" : "bg-transparent text-black placeholder-gray-600"}`}
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="rounded-full bg-orange-600 text-white text-sm sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:bg-orange-500 transition"
        >
          Add +
        </button>
      </div>


      <div>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
