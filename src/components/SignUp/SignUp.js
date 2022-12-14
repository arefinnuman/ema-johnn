import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("password should be 6 characters or more");
      return;
    }

    if (password !== confirm) {
      setError("Your Password did not match");
      return;
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login Now</h2>
      <form onSubmit={handleSubmit}>
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
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
