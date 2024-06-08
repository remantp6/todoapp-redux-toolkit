"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../lib/redux/slice/todoSlice";
import { useRouter } from "next/navigation";

const CreateTodo = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  //const [user, setuser] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (name.trim() && email.trim()) {
      dispatch(
        addTodo({
          name,
          email,
        })
      );
      //setuser({ name: name, email: email });
      router.push("/todoList");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <h1 className="text-2xl">Add Item</h1>
      <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
