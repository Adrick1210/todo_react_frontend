import { Link, Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Welcome to You-Do!</h1>
      <h2>Would you like to sign up?</h2>
      <Link to="/signup">
      <button>Signup</button>
      </Link>

      <h3>Already have a account?</h3>
      <Link to="/login">
        login
      </Link>
      <Outlet />
    </div>
  );
}
export default Main;
