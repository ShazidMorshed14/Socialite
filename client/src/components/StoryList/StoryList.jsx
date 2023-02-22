import React, { useContext } from "react";
import PlusWhiteIcon from "../../images/svg/plusWhite.svg";
import ProfileStory from "../../images/img/profile_story.jpg";
import Profile1 from "../../images/img/1.jpg";
import Profile2 from "../../images/img/2.jpg";
import Profile3 from "../../images/img/3.jpg";
import Profile4 from "../../images/img/4.jpg";
import Profile5 from "../../images/img/5.jpg";
import Profile6 from "../../images/img/6.jpg";
import { UserContext } from "../../App";

const StoryList = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div className="story">
      <div className="cover">
        <div className="create">
          <div className="svg">
            <img src={PlusWhiteIcon} alt="Create Story" />
          </div>
          <h3>
            Create a <br /> Story
          </h3>
        </div>
        <div
          className="bg"
          //style={{ "background-image": "url(./img/profile_story.jpg)" }}
          style={{
            backgroundImage: `url(${
              state
                ? state.pic
                : "https://res.cloudinary.com/aventra/image/upload/v1676883327/default-avatar-png_okjzqd.png"
            })`,
          }}
        >
          <span />
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile1})`,
            }}
          />
        </div>
        <h3>Shazid Morshed</h3>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${Profile2})`,
          }}
        >
          <span />
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile3})`,
            }}
          />
        </div>
        <h3>User Name</h3>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${Profile4})`,
          }}
        >
          <span />
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile5})`,
            }}
          />
        </div>
        <h3>User Name</h3>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${Profile6})`,
          }}
        >
          <span />
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile3})`,
            }}
          />
        </div>
        <h3>User Name</h3>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${Profile1})`,
          }}
        >
          <span />
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile4})`,
            }}
          />
        </div>
        <h3>User Name</h3>
        <div
          className="bg"
          style={{
            backgroundImage: `url(${Profile6})`,
          }}
        >
          <span />
        </div>
      </div>
    </div>
  );
};

export default StoryList;
