import { Navbar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import axios from "axios";

export const Signin = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formValues;

  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const loginHandler = async (Logincredentials) => {
    try {
      const response = await axios.post("/api/auth/login", Logincredentials);

      if (response.status === 200) {
        const { foundUser, encodedToken } = await response.data;
        localStorage.setItem("token", JSON.stringify(encodedToken));
        localStorage.setItem("userInfo", JSON.stringify(foundUser));
        setAuthState({
          token: encodedToken,
          userInfo: foundUser
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="form-container display">
        <form className="form-grp">
          <label
            className="heading-md fw-bold active text-left"
            htmlFor="email"
          >
            Email address
          </label>
          <input
            type="email"
            placeholder="johndoe@something.com"
            name="email"
            value={email}
            onChange={(e) => {
              setFormValues((state) => ({ ...state, email: e.target.value }));
            }}
          />
          <label
            className="heading-md fw-bold active text-left"
            htmlFor="password"
          >
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
          <div className="form-accept">
            <div>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button
            className="btn-cta"
            onClick={(e) => {
              e.preventDefault();
              loginHandler({ email, password });
            }}
          >
            Login
          </button>
        </form>
        <Link to="/signup" className="text-sm fw-semibold login-link">
          Create New account
        </Link>
      </div>
    </div>
  );
};
