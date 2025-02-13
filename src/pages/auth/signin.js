import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/signin", {
        email: formData.email,
        password: formData.password,
      });

      const token = res.data;

      if (token) {
        Cookies.set("token", token, { expires: 1 });
        router.push("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="bg-yellow-600 w-full h-full flex flex-col gap-8 items-center justify-center my-auto">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex gap-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
            required
          />
        </div>
        <button className="rounded-md p-2 border-2" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
