import { Navbar } from "../../components";
import { Link } from "react-router-dom";
export const Signin = () => {
  return (
    <div>
      <Navbar />
      <h1>Sign in wip...</h1>
      <div class="form-container display">
        <form class="form-grp">
          <label class="heading-md fw-bold active text-left" for="email">
            Email address
          </label>
          <input
            type="email"
            placeholder="johndoe@something.com"
            name="email"
          />
          <label class="heading-md fw-bold active text-left" for="password">
            Enter Password
          </label>
          <input type="password" name="password" />
          <div class="form-accept">
            <div>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <button class="btn-cta">Login</button>
        </form>
        <Link to="/signup" class="text-sm fw-semibold login-link">
          Create New account >
        </Link>
      </div>
    </div>
  );
};
