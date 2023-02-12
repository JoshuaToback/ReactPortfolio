import React from "react";

export default function navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Joshua Toback
      </a>
      <ul className="navbar">
        <li>
          <a href="/fullStack">Full Stack</a>
        </li>
        <li>
          <a href="/frontEnd">Front End</a>
        </li>
        <li>
          <a href="/backEnd">Back End</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}