'use client'
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../lib/redux/slice/todoSlice';

const UpdateTodo = () => {
  const [updatedData, setUpdatedData] = useState();
  const router = useRouter();
  const { todoId } = useParams();
  const dispatch = useDispatch();
  const allTodos = useSelector(state => state.todos.users);
  //console.log("all todo", allTodos);

  useEffect(() => {
    if (todoId) {
      const selectedTodo = allTodos.find(todo => todo.id === parseInt(todoId));
      if (selectedTodo) {
        setUpdatedData(selectedTodo.list);
      }
    }
  }, [todoId, allTodos]);
  //console.log("here is updated data", updatedData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoId) {
      dispatch(updateTodo({
        id: parseInt(todoId),
        name: updatedData.name,
        email: updatedData.email,
      }));
      router.push("/todoList");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Update Item</h1>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            name="name"
           value={updatedData && updatedData.name || ''}
           onChange={handleChange}
            placeholder="Name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={updatedData && updatedData.email || ''}
            onChange={handleChange}
            placeholder="Email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;

