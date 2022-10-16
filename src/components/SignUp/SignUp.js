import React from "react";
import "./SignUp.css";

const SignUp = () => {
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
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            placeholder="confirm password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="login" />
      </form>
    </div>
  );
};

export default SignUp;
