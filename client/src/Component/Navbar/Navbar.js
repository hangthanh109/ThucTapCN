import React from "react";
import "./Navbar.scss";
import logo from "./logo.png";
import fb from "./facebook.svg";
import zl from "./zalo.svg";
import tl from "./telephone.svg";
import bag from "./bag.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="container-wrapper">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="navbar-info">
              <div className="socical">
                <a href="#">
                  <img src={fb} alt="fb" />
                </a>
                <a href="#">
                  <img src={zl} alt="fb" />
                </a>
                <a href="#">
                  <img src={tl} alt="fb" />
                </a>
              </div>
              <a href="#" className="bag-nav">
                <img src={bag} alt="bag" />
                <span className="increbar">0</span>
                <span className="text-nav">Giỏ hàng</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
