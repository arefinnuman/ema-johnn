import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Login Now</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="login" />
        <p>
          New to ema john <Link to="/signup">Create a new Account </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
