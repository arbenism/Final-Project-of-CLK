import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="navigation-holder">
      <li>
        <Link to="/" className="hover-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog" className="hover-link">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/portofolio" className="hover-link">
          Portofolio
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover-link">
          Contact
        </Link>
      </li>
    </ul>
  );
}
