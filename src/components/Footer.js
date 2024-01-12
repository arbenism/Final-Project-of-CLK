import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import style from "../style/style.scss";
import mylogo from "../repository/ourLogo.svg.png";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <span className="copyright">
              Copyright © {new Date().getFullYear()} Arbenis Musliu
            </span>
          </div>
          <div className="col-12 col-md-8">
            <div className="social-media">
              <span className="instagram">
                <a href="https://www.instagram.com/arbenis.m/">
                  <i class="bi bi-instagram"></i>
                </a>
              </span>
              <span className="facebook">
                <a href="https://www.facebook.com/arbenismusliu4/">
                  <i class="bi bi-facebook"></i>
                </a>
              </span>
              <span className="linkedin">
                <a href="https://www.linkedin.com/in/arbenis-musliu">
                  <i class="bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
