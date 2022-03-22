import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signupHandler = async (credentials) => {
    const { data } = axios.post("/api/auth/signup", credentials);
    console.log(data);
  };
  return (
    <div>
      <Navbar />
      <h1>Signup wip ....</h1>
      <div className="form-container display">
        <form
          className="form-grp"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="heading-md fw-bold active text-left " for="email">
            Email address
          </label>
          <input
            type="email"
            placeholder="johndoe@something.com"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="heading-md fw-bold active text-left" for="password">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="form-accept-signup">
            <input type="checkbox" />
            <label>I accept all terms and conditions</label>
          </div>
          <button
            className="btn-cta"
            onClick={(e) => {
              e.preventDefault();
              signupHandler({ email, password });
            }}
          >
            Sign Up
          </button>
        </form>
        <Link to="/signin" className="text-sm fw-semibold login-link">
          Already Have an account
        </Link>
      </div>
    </div>
  );
};
