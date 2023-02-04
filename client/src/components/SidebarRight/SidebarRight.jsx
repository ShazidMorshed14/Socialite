import React from "react";
import Profile from "../../images/img/profile.jpg";
import BellLightSvg from "../../images/svg/bellLight.svg";
import MegaPhoneSvg from "../../images/svg/megaphone.svg";
import Profile1 from "../../images/img/1.jpg";
import Profile2 from "../../images/img/2.jpg";
import Profile3 from "../../images/img/3.jpg";
import Profile4 from "../../images/img/4.jpg";
import Profile5 from "../../images/img/5.jpg";
import Profile6 from "../../images/img/6.jpg";

const SidebarRight = () => {
  return (
    <div className="sidebar right">
      <div className="container borderNone">
        <div className="mainTitle">
          <h3 className="padding">Your Pages</h3>
          <i className="fa fa-ellipsis-h" />
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            //style={{ "background-image": "url(./img/profile.jpg)" }}
            style={{
              backgroundImage: `url(${Profile})`,
            }}
          />
          <div className="name">My Page</div>
        </div>
        <div className="globalProfile globalProfileSmall">
          <div className="svg">
            <img src={BellLightSvg} alt />
          </div>
          <div className="name">25 Notifications</div>
        </div>
        <div className="globalProfile globalProfileSmall">
          <div className="svg">
            <img src={MegaPhoneSvg} alt />
          </div>
          <div className="name">Create Promotion</div>
        </div>
      </div>
      <div className="container">
        <div className="mainTitle">
          <h3 className="padding">Contacts</h3>
          <div className="items icons">
            <i className="fa fa-video" />
            <i className="fa fa-search" />
            <i className="fa fa-ellipsis-h" />
          </div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile1})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Honey Rangel</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile1})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Elisa Maddox</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile2})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Dawson Mason</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile3})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Ira Gordon</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile4})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Adam Cobb</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile5})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Sommer Lawrence</div>
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile6})`,
            }}
          >
            <div className="active" />
          </div>
          <div className="name">Nojus Cantu</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
