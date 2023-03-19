import React, { useContext } from "react";
import ProfileImg from "../../images/img/profile.jpg";
import Icon1 from "../../images/ico/1.png";
import Icon2 from "../../images/ico/2.png";
import Icon3 from "../../images/ico/3.png";
import Icon4 from "../../images/ico/4.png";
import Code1 from "../../images/img/code1.jpg";
import Code2 from "../../images/img/code2.jpg";
import Code3 from "../../images/img/code3.jpg";
import Code4 from "../../images/img/code4.jpg";
import { UserContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

const SidebarLeft = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="sidebar left">
      <div className="container borderNone">
        <div className="globalProfile" onClick={() => navigate("/profile")}>
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${
                state
                  ? state.pic
                  : "https://res.cloudinary.com/aventra/image/upload/v1676883327/default-avatar-png_okjzqd.png"
              })`,
            }}
          />
          <div className="name">{state ? state.name : "loading"}</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Icon1})`,
            }}
          />
          <div className="name">COVID-19 info center</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Icon2})`,
            }}
          />
          <div className="name">Pages</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Icon3})`,
            }}
          />
          <div className="name">Friends</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Icon4})`,
            }}
          />
          <div className="name">Messenger</div>
        </div>
        <div className="globalProfile">
          <div className="globalRoundProfile circle">
            <i className="fa fa-angle-down" />
          </div>
          <div className="name">See More</div>
        </div>
      </div>
      <div className="container">
        <div className="mainTitle">
          <h3 className="padding">Your Shortcuts</h3>
          <a href="#">Edit</a>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile r-10"
            style={{
              backgroundImage: `url(${Code1})`,
            }}
          />
          <div className="name">Html Css Javascript</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile r-10"
            style={{
              backgroundImage: `url(${Code2})`,
            }}
          />
          <div className="name">Tutorials</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile r-10"
            style={{
              backgroundImage: `url(${Code3})`,
            }}
          />
          <div className="name">Coding</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile r-10"
            style={{
              backgroundImage: `url(${Code4})`,
            }}
          />
          <div className="name">ReactJs</div>
        </div>
        <div className="globalProfile">
          <div className="globalRoundProfile circle">
            <i className="fa fa-angle-down" />
          </div>
          <div className="name">See More</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
