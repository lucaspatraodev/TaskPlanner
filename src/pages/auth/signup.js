import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/signup", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-yellow-600 w-full h-full flex flex-col gap-8 items-center justify-center my-auto">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="rounded-md p-2 border-2" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
