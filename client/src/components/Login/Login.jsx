import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/common.scss";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import { API_URL } from "../../commons/helper";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleShiftToSignup = (e) => {
    navigate("/signup");
  };

  const signInRequest = (e) => {
    e.preventDefault();
    setLoading(true);

    if (email && password) {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: "JWT fefege...",
        };

        const reqBody = {
          email: email,
          password: password,
        };

        axios
          .post(`${API_URL}/signin`, reqBody, {
            headers: headers,
          })
          .then((response) => {
            //console.log("success response", response.data);
            if (response.data.user) {
              setLoading(false);
              navigate("/");
              localStorage.setItem("jwt", response.data.token);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              dispatch({ type: "USER", payload: response.data.user });
              toast.success("Login Successful!", {
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                theme: "light",
              });
            }
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.response.data.error, {
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              theme: "light",
            });
            setLoading(false);
          });
      } else {
        toast.error("Email Not Valid", {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
        setLoading(false);
      }
    } else {
      toast.error("Please Give all the data", {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "light",
      });
      setLoading(false);
    }
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />{" "}
                  </div>
                  <div className="input-text">
                    {" "}
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      id="password-input-login"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
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
                    {!loading ? (
                      <button
                        className="signin_submit"
                        onClick={(e) => signInRequest(e)}
                        type="submit"
                      >
                        Sign in
                      </button>
                    ) : (
                      <button className="signin_submit">
                        <i class="fa fa-circle-o-notch fa-spin"></i>
                      </button>
                    )}
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
