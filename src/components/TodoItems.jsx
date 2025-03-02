import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      className="flex items-center justify-between my-3 px-4 py-2 bg-gray-100 rounded-lg shadow-sm transition transform hover:scale-105"
    >
      <div onClick={() => toggle(id)} className="flex items-center flex-1 cursor-pointer">
        <img className="w-7" src={isComplete ? tick : not_tick} alt="checkbox" />
        <p
          className={`ml-4 text-lg ${isComplete ? 'line-through text-gray-500' : 'text-gray-800'}`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        className="w-5 cursor-pointer hover:opacity-75 transition"
        src={delete_icon}
        alt="delete"
      />
    </div>
  );
};

export default TodoItems;
