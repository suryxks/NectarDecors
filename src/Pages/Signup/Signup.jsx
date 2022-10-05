import React from "react";
import { Navbar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { signUpService } from "../../services";
import "./Signup.css";
import { useEffect } from "react";
const initialState = {
  email: "",
  password: "",
};

export const Signup = () => {
  const navigate = useNavigate();
  const { setAuthState, authState} = useAuth();
  const signupHandler = async ({ email, password }) => {
    try {
      const { createdUser, encodedToken } = await signUpService({ email, password});
      setAuthState({
        token: encodedToken,
        userInfo: createdUser,
        isAuthenticated: true
      });
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

  useEffect(() => {
    localStorage.setItem("token", authState.token);
    localStorage.setItem("userInfo", authState.userInfo);
  }, [authState])
  
  return (
    <div>
      <Navbar />

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
