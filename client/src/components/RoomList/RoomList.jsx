import React from "react";
import ProfileImage from "../../images/img/profile.jpg";
import PlusWhiteIcon from "../../images/svg/plusWhite.svg";
import Profile1 from "../../images/img/1.jpg";
import Profile2 from "../../images/img/2.jpg";
import Profile3 from "../../images/img/3.jpg";
import Profile4 from "../../images/img/4.jpg";
import Profile5 from "../../images/img/5.jpg";
import Profile6 from "../../images/img/6.jpg";
import Profile7 from "../../images/img/7.jpg";
import Profile8 from "../../images/img/8.jpg";
import Profile9 from "../../images/img/9.jpg";
import Profile10 from "../../images/img/10.jpg";
import Profile11 from "../../images/img/11.jpg";
import Profile12 from "../../images/img/12.jpg";

const RoomList = () => {
  return (
    <div className="rooms">
      <div className="title">
        <div className="left">
          <i className="fa fa-video-camera" />
          <h3>Rooms</h3>
          <p>Video chat with friends</p>
          <i className="fa fa-exclamation-circle" />
        </div>
        <div className="right">
          <a href="#">Create Room</a>
        </div>
      </div>
      <div className="profiles">
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${ProfileImage})`,
          }}
        >
          <div className="svg">
            <img src={PlusWhiteIcon} alt={PlusWhiteIcon} />
          </div>
          <span />
          <div className="darkSpan" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile1})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile2})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile3})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile4})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile5})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile6})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile7})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile8})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile9})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile10})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile11})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(${Profile12})`,
          }}
        >
          <span />
          <div className="active" />
        </div>
      </div>
    </div>
  );
};

export default RoomList;
