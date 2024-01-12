import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import style from "../style/style.scss";
import mylogo from "../repository/ourLogo.svg.png";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2 holder-logo">
            <a href="/" className="a-logo">
              <img
                src={mylogo}
                className="logo-of-company"
                alt="Our compnay logo"
              />
            </a>
          </div>
          <div className="col-12 col-md-10">
            <div className="nav-holder">
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
