import { useState } from "react";
import { Button, Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <nav className="navbar navbar-expand-md navbar-custom active  fixed-top">
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className="logoImg"></div>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="navDES">
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="navDES">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="navDES">
            <Link
              activeClass="active"
              to="Service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Service
            </Link>
          </li>
          <li className="navDES">
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li className="navDES">
            <button className="btn btn_get_kothon">Get Kothon</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
