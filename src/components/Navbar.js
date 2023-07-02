import React from "react";
import {HashLink} from 'react-router-hash-link'
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import "../styles/style.css";

const Navbar = () => {
  return (
    // header section
    <>
      <div className="background" id="Home">
        <nav className="container">
          <img
            style={{ width: 130, borderRadius: 50 }}
            src="./images/images.jpg"
            alt="tastybite"
          />
          <ul>
            <li>
              <HashLink to={"/#home"}>Home</HashLink>
            </li>
            <li>
              <HashLink to={"/#categories"}>Categories</HashLink>
            </li>
            <li>
              <HashLink to={"/#cake"}>Cakes</HashLink>
            </li>
            <li>
              <HashLink to={"/#service"}>Services</HashLink>
            </li>
            <li>
              <HashLink to={"/#contact"}>Contact Us</HashLink>
            </li>
          </ul>
          <div className="float-right">
            <input
              type="text"
              placeholder="search"
              style={{ padding: 5, borderRadius: 10 }}
            />
            <GoSearch style={{ color: "#fff", marginLeft: 10, fontSize: 20 }} />
            <CgProfile style={{ color: "fff", fontSize: 20, marginLeft: 10 }} />
          </div>
        </nav>
        {/* mid section */}
      </div>

      {/* header and home section is end */}

      {/* <!-- services sections --> */}

      {/* <!-- about us --> */}

      {/* <!-- contact us --> */}

      {/* <!--footer section starts --> */}
    </>
  );
};

export default Navbar;
