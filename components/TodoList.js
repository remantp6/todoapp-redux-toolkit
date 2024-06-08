'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../lib/redux/slice/todoSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TodoList = () => {
  const router = useRouter();
  const todos = useSelector(state => state.todos.users);
  //console.log("value of todos from Todolist", todos);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    router.push(`/update/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="mt-8">
    <p className='text-center text-2xl'>All Items</p>
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2  text-gray-600 uppercase">
              ID
            </th>
            <th className="px-5 py-3 border-b-2 text-gray-600 uppercase">
              Name
            </th>
            <th className="px-5 py-3 border-b-2 text-gray-600 uppercase">
              Email
            </th>
            <th className="px-5 py-3 border-b text-gray-600 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.map(todo => (
            <tr key={todo.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {todo.id}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {todo.list.name}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {todo.list.email}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <button 
                onClick={() => handleEdit(todo.id)} 
                className="text-blue-600 hover:text-blue-900"
              >
                Edit
              </button>
              <button 
                onClick={() => handleDelete(todo.id)} 
                className="ml-2 text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/">
      <button>Back</button>
      </Link>
    </div>
  );
};

export default TodoList;
