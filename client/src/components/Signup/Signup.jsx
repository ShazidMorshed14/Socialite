import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/common.scss";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShiftToSignin = (e) => {
    navigate("/signin");
  };

  return (
    <div className="authentication_wrapper">
      <div className="container">
        <div className="card">
          <div className="form">
            <div className="left-side">
              <div className="sign-up s_form">
                <div className="main active">
                  <div className="heading">
                    <h2>Create Acccount</h2>
                  </div>
                  <div className="social">
                    {" "}
                    <span>
                      <i className="fa fa-google" />
                    </span>{" "}
                    <span>
                      <i className="fa fa-facebook" />
                    </span>{" "}
                    <span>
                      <i className="fa fa-twitter" />
                    </span>{" "}
                    <span>
                      <i className="fa fa-dribbble" />
                    </span>{" "}
                  </div>
                  <div className="or">
                    or use your e-mail for registration :
                  </div>
                  <div className="input-text">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter your name"
                      id="user-name"
                      require=""
                    />{" "}
                  </div>
                  <div className="input-text">
                    {" "}
                    <input type="text" placeholder="Enter your Email" />{" "}
                  </div>
                  <div className="input-text">
                    {" "}
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      id="password-input-login"
                      require=""
                    />{" "}
                    <i
                      className="fa fa-eye-slash passcode1"
                      onClick={(e) => setShowPassword(!showPassword)}
                    />{" "}
                  </div>

                  <div className="buttons first">
                    {" "}
                    <button className="sign_up_here">Sign up</button>{" "}
                    <button
                      className="sign_in_here"
                      onClick={handleShiftToSignin}
                    >
                      Sign in
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="cover_image">
                {" "}
                <img src="https://imgs.search.brave.com/PCh4cdhgzfWxHpmRzaCGEOg8m83ce_V0hKRsHe1lbwI/rs:fit:640:960:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRlLzFh/LzAxLzRlMWEwMTI0/OTVhNDc3ZDJlOGMy/MzZjYTg4NGE0NWQ2/LmpwZw" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
