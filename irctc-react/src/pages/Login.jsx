import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful");
    navigate("/");
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;