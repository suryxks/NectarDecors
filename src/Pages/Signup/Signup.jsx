import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { signUpService } from "../../services";
import "./Signup.css";
const initialState = {
  email: "",
  password: "",
};

export const Signup = () => {
  const navigate = useNavigate();
  const { setAuthState} = useAuth();
  const signupHandler = async ({ email, password }) => {
    try {
      const { createdUser, encodedToken } = await signUpService({ email, password});
      setAuthState({
        token: encodedToken,
        userInfo: createdUser,
        isAuthenticated: true
      });
      localStorage.setItem("token", JSON.stringify(encodedToken));
      localStorage.setItem("userInfo", JSON.stringify(createdUser));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  const { data, handleChange, handleSubmit, errors } = useForm({
    intitalValues: initialState,
    onSubmit: signupHandler,
    validations: {
      email: {
        pattern: {
          value: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
          message: "Please enter a valid email",
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: "Password should be longer than six characters",
        },
      },
    },
  });
  const { email, password } = data;
  
  return (
    <div>
      <div className="form-container display">
        <form className="form-grp" onSubmit={handleSubmit}>
          <label className="heading-md fw-bold  text-left " htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            placeholder="johndoe@something.com"
            name="email"
            value={email}
            id="email"
            required={true}
            onChange={(e) => handleChange("email", e)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label className="heading-md fw-bold  text-left" htmlFor="password">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            required={true}
            onChange={(e) => handleChange("password", e)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="form-accept-signup">
            <input type="checkbox" />
            <label>I accept all terms and conditions</label>
          </div>
          <button className="btn-cta" onClick={handleSubmit}>
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
