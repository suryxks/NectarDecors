import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useForm } from "../../hooks/useForm";
import { Navbar } from "../../components";
import { loginService } from "../../services";

export const Signin = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const guest = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const loginHandler = async (Logincredentials) => {
    try {
      const { foundUser, encodedToken } = await loginService(Logincredentials);
      setAuthState({
        token: encodedToken,
        userInfo: foundUser,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const { data, handleChange, handleSubmit, errors } = useForm({
    intitalValues: initialState,
    onSubmit: loginHandler,
    validations: {
      email: {
        pattern: {
          // eslint-disable-next-line no-useless-escape
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

  const navigate = useNavigate();
  const { setAuthState, authState } = useAuth();
  
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(authState.token));
    localStorage.setItem("userInfo", JSON.stringify(authState.userInfo));
  }, [authState]);

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
            onChange={(e) => handleChange("email", e)}
          />
          <div>{errors.email && <p className="error">{errors.email}</p>}</div>
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
            onChange={(e) => handleChange("password", e)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="form-accept">
            <div>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
          </div>
          <button className="btn-cta" onClick={handleSubmit}>
            Login
          </button>
          <button
            className="btn-cta"
            onClick={(e) => {
              e.preventDefault();
              loginHandler(guest);
            }}
          >
            Login as guest
          </button>
        </form>
        <Link to="/signup" className="text-sm fw-semibold login-link">
          Create New account
        </Link>
      </div>
    </div>
  );
};
