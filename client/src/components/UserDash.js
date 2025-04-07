import React, { useEffect, useState } from "react";
import axios from "axios";

const UserDash = () => {
  const [firs, setFirs] = useState([]);
  const [form, setForm] = useState({ description: "", location: "", date: "" });

  const token = localStorage.getItem("token");

  const fetchFIRs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/fir", {
        headers: { Authorization: token }
      });
      setFirs(res.data);
    } catch (err) {
      alert("Error fetching FIRs");
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/fir", form, {
        headers: { Authorization: token }
      });
      fetchFIRs();
      alert("FIR Submitted!");
    } catch (err) {
      alert("Error submitting FIR");
    }
  };

  useEffect(() => {
    fetchFIRs();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Welcome to your Dashboard</h2>

      <form onSubmit={handleSubmit} className="my-4">
        <input type="text" name="description" placeholder="Description" onChange={handleChange} className="form-control mb-2" />
        <input type="text" name="location" placeholder="Location" onChange={handleChange} className="form-control mb-2" />
        <input type="date" name="date" onChange={handleChange} className="form-control mb-2" />
        <button className="btn btn-primary">Submit FIR</button>
      </form>

      <h4>Your Filed FIRs</h4>
      <ul className="list-group">
        {firs.map((fir) => (
          <li key={fir._id} className="list-group-item">
            <strong>{fir.description}</strong> - {fir.location} on {new Date(fir.date).toLocaleDateString()} <br />
            <em>Status: {fir.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDash;
