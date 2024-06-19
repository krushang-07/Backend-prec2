import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <h2>TODO APP</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/Profile"}>Profile</Link>
        <Link to={"/login"}>Login</Link>
      </article>
    </nav>
  );
};

export default Header;
