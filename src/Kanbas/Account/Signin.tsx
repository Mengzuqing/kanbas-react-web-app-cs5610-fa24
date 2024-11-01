import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = () => {
    // Retrieve users from localStorage or database
    let users = JSON.parse(localStorage.getItem("users") ?? "[]");

    // Find user from the database that matches the credentials
    const user = users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password
    );

    if (!user) {
      alert("Invalid username or password");
      return;
    }

    // Set the current user in Redux state
    dispatch(setCurrentUser(user));

    // Navigate to the dashboard after successful login
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="Username"
        className="form-control mb-2"
      />
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="Password"
        type="password"
        className="form-control mb-2"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}