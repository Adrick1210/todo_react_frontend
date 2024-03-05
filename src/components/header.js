import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

    return (
      <div>
        You-do
        <div>
          <button onClick={() => {
            localStorage.removeItem('token');
            navigate("/")
          }}>
            Logout
          </button>
        </div>
      </div>
    )
  }
  export default Header;