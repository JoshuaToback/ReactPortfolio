import React from "react";
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Joshua Toback
      </Link>
      <ul className="navbar">
          <CustomLink to="/fullStack">Full Stack</CustomLink>
          <CustomLink to="/frontEnd">Front End</CustomLink>
          <CustomLink to="/backEnd">Back End</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
        <Link to = {to} {...props}>
        { children }
        </Link>
        </li>
    )
}