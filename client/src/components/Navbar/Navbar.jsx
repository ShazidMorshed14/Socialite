import React from "react";
import "../../styles/common.scss";
import { DiCodeigniter } from "react-icons/di";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-dark navbar-expand-md" id="app-navbar">
        <div className="container">
          <Link to={"/"}>
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
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="/">
                  Feed
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
