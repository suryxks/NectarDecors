import React from 'react';
import { Navbar } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import "./Signup.css";
const initialState = {
  email: "",
  password: "",
};

export const Signup = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const signupHandler = async ({ email, password }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        email: email,
        password: password,
      });
      console.log(response)
      if (response.status === 200) {
        const { createdUser, encodedToken } = response.data;
        setAuthState({
          token: encodedToken,
          userInfo: createdUser,
        });
        localStorage.setItem("token", encodedToken);
      localStorage.setItem("userInfo", createdUser);
        navigate("/");
      }

      
    } catch (error) {
      console.log(error);
    }
  };
  const { data, handleChange, handleSubmit, errors } = useForm({
    intitalValues: initialState,
    onSubmit: signupHandler,
    validations: {
      email: {
        pattern: {
          value: "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/",
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
