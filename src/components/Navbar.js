import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

import "../styles/style.css";

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="background" id="Home">
        <nav className="container">
          <img
            style={{ width: 200 }}
            src="./images/logo.png"
            alt="tastybite"
          />
          <ul>
            {user && (
              <>
                <li>
                  <Link to={"/#home"}>Home</Link>
                </li>
                <li>
                  <HashLink to={"/#online"}>Online Courses</HashLink>
                </li>
                <li>
                  <HashLink to={"/#categories"}>Categories</HashLink>
                </li>
                <li>
                  <HashLink to={"/#service"}>Services</HashLink>
                </li>
                <li>
                  <HashLink to={"/#contact"}>Contact Us</HashLink>
                </li>
              </>
            )}
          </ul>
          <div className="float-right">


            {user ? (
              <button
                className="button"
                onClick={() => {
                  auth.signOut();
                  navigate('/login');
                }}
              >
                Logout
              </button>
            ) : (
              <>
              <ul>
                <Link to="/login">
                  <button type="button" className="button">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="button">
                    Sign up
                  </button>
                </Link>
                </ul>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
