import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          isSticky ? "sticky" : ""
        } bg-white navbar-light px-lg-5`}
      >
        <div className="container-fluid">
          <div>
            <span className="logoFirstPart">Gym</span>
            <span className="logoSecondPart">baran</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav align-items-center navList">
              <li className="nav-item navItems">
                <ScrollLink
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeclassname="active"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav-item navItems mr-lg-3">
                <ScrollLink
                  to="program"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeclassname="active"
                >
                  Program
                </ScrollLink>
              </li>
              <li className="nav-item navItems mr-lg-3">
                <ScrollLink
                  to="testimonial"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeclassname="active"
                >
                  Blog
                </ScrollLink>
              </li>
              <li className="nav-item navItems mr-lg-3">
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  activeclassname="active"
                >
                  About Us
                </ScrollLink>
              </li>
              <li className="nav-item mr-lg-3">
                <button className="loginButton">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
