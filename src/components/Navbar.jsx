import logo from "../images/med-save.png";
import Login from "./Login";
import "../components/navbar.css";
export default function Navbar() {
  return (
    <div className="heading-container">
      <div className="navbar">
        <nav>
          <img src={logo} alt="logo" className="logo" />
          <Login />

          <h1 className="heading">Welcome</h1>
        </nav>
      </div>
    </div>
  );
}
