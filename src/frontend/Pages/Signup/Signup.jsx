import { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import "./Signup.css";
export const Signup = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formValues;
  const signupHandler = async (email, password) => {
    try {
      const { data } = await axios.post(`/api/auth/signup`, {
        email: email,
        password: password
      });
      const { createdUser, encodedToken } = data;
      setAuthState({
        token: encodedToken,
        userInfo: createdUser
      });

      navigate("/");

      localStorage.setItem("token", encodedToken);
      localStorage.setItem("userInfo", createdUser);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="form-container display">
        <form
          className="form-grp"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="heading-md fw-bold  text-left " for="email">
            Email address
          </label>
          <input
            type="email"
            placeholder="johndoe@something.com"
            name="email"
            value={email}
            onChange={(e) => {
              setFormValues((state) => ({
                ...state,
                email: e.target.value
              }));
            }}
          />
          <label className="heading-md fw-bold  text-left" for="password">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setFormValues((state) => ({
                ...state,
                password: e.target.value
              }));
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
              signupHandler(email, password);
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
