import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/user");
    } catch (err) {
      alert("Login failed: " + err.response?.data?.error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="form-control mb-2" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="form-control mb-2" />
        <button className="btn btn-success" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
