import React, { useContext } from "react";
import "../../styles/common.scss";
import { DiCodeigniter } from "react-icons/di";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
    navigate("/signin");
  };

  const renderList = () => {
    console.log("state context", state);
    if (state) {
      return [
        <>
          {" "}
          <li className="nav-item" role="presentation">
            <Link className="nav-link active" to="/">
              Feed
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link active" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link active" to="/create-post">
              Create Post
            </Link>
          </li>
          <li
            className="nav-item"
            role="presentation"
            onClick={(e) => handleLogout(e)}
          >
            <a className="nav-link active" style={{ cursor: "pointer" }}>
              Logout
            </a>
          </li>
        </>,
      ];
    } else {
      return [
        <>
          <li className="nav-item" role="presentation">
            <Link className="nav-link active" to="/signin">
              Login
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link className="nav-link active" to="/signup">
              Signup
            </Link>
          </li>
        </>,
      ];
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-dark navbar-expand-md" id="app-navbar">
        <div className="container">
          <Link to={state ? "/" : "/signin"}>
            <div className="navbar-brand">
              <DiCodeigniter style={{ marginRight: "0.5em" }} /> SociaLite
            </div>
          </Link>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">{renderList()}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
