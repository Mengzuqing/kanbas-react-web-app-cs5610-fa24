import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" 
             value="alice" 
             placeholder="username"
             className="form-control mb-2" />
      <input id="wd-password" 
             value="123" 
             placeholder="password"
             type="password" 
             className="form-control mb-2"/>
      <input id="wd-firstname" 
             value="Alice" 
             placeholder="First Name" 
             className="form-control mb-2"/>
      <input id="wd-lastname" 
             value="Wonderland" 
             placeholder="Last Name" 
             className="form-control mb-2"/>

      <input id="wd-dob" 
             value="mm-dd-yyyy" 
             type="date" 
             className="form-control mb-2"/>
      <input id="wd-email" 
             value="alice@wonderland" 
             type="email" 
             className="form-control mb-2"/>

      <input id="wd-user" 
             value="User" 
             type="" 
             className="form-control mb-2"/>

     
      <Link id="wd-profile-link" 
            to="/Kanbas/Account/Profile" 
             className="btn btn-danger w-100">
           Sign out</Link>
    </div>
);}


