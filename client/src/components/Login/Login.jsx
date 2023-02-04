import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/common.scss";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleShiftToSignup = (e) => {
    navigate("/signup");
  };
  return (
    <div className="authentication_wrapper">
      <div className="container">
        <div className="card">
          <div className="form">
            <div className="left-side">
              <div className="sign-in s_form ">
                <div className="main_login active">
                  <div className="heading">
                    <h2>Login Now</h2>
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
                      placeholder="Enter your E-mail"
                      require=""
                    />{" "}
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
                  <div className="terms">
                    {" "}
                    <input type="checkbox" name="" id="" defaultChecked />
                    <p>Remember password</p>
                  </div>
                  <div className="buttons">
                    {" "}
                    <button className="signin_submit">Sign in</button>{" "}
                    <button
                      className="sign_up_back_here"
                      onClick={handleShiftToSignup}
                    >
                      Sign up
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

export default Login;
