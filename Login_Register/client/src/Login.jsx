import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
        console.log(result)
        if(result.data === "Success") {
            navigate('/home')
        }
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-75">
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control rounded-0"
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="btn btn-default border w-100 bg-light round-0 text-decoration-none">
                        Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
