import "../components/login.css";
export default function Login() {
  return (
    <div>
      <div className="login-container">
        <span className="username-password">
          <a href="" className="sign-up">
            Sign up
          </a>
          <input type="text" placeholder="username" className="username" />
          <input type="text" placeholder="password" className="password" />
          <button className="login-btn">Login</button>
        </span>
      </div>
    </div>
  );
}
