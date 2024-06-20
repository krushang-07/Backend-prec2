import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const logOutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(
        `${server}/users/logout`,

        {
          withCredentials: true,
        }
      );
      toast.success("logged out successfully");
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>TODO APP</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/Profile"}>Profile</Link>

        {isAuthenticated ? (
          <button disabled={loading} className="btn" onClick={logOutHandler}>
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
