import "./index.css";
import { MdAccountCircle } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <a href="#" className="logo-text">
          LuxuryCars
        </a>
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>

        <div className="nav-account">
          <MdAccountCircle />
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
