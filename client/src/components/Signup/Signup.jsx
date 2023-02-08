import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/common.scss";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleShiftToSignin = (e) => {
    navigate("/signin");
  };

  const signUpRequest = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name && email && password) {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // Authorization: "JWT fefege...",
        };

        const reqBody = {
          name: name,
          email: email,
          password: password,
        };

        axios
          .post("/signup", reqBody, {
            headers: headers,
          })
          .then((response) => {
            //console.log("success response", response.data);
            if (response.data.userDetails) {
              setLoading(false);
              navigate("/signin");
              toast.success("Registration Successful!", {
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Enter your name"
                      id="user-name"
                      require=""
                    />{" "}
                  </div>
                  <div className="input-text">
                    {" "}
                    <input
                      type="text"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-text">
                    {" "}
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      id="password-input-login"
                      require=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />{" "}
                    <i
                      className="fa fa-eye-slash passcode1"
                      onClick={(e) => setShowPassword(!showPassword)}
                    />{" "}
                  </div>

                  <div className="buttons first">
                    {" "}
                    {!loading ? (
                      <button
                        className="sign_up_here"
                        onClick={(e) => signUpRequest(e)}
                        type="submit"
                      >
                        Signup
                      </button>
                    ) : (
                      <button className="sign_up_here">
                        <i class="fa fa-circle-o-notch fa-spin"></i>
                      </button>
                    )}
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
