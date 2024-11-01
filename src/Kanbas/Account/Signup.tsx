import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signup = () => {
    const newUser = {
      username: credentials.username,
      password: credentials.password,
      // Other user information...
    };

    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users") ?? "[]");
    users.push(newUser);

    // Save the updated users list to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Navigate to the Signin page after successful signup
    navigate("/Kanbas/Account/Signin");
  };

  return (
       <div id="wd-signup-screen">
         <h3>Sign up</h3>
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
         <button onClick={signup} id="wd-signup-btn" className="btn btn-primary w-100">
           Sign up
         </button>
         <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
           Sign in
         </Link>
       </div>
     );
   }
   

