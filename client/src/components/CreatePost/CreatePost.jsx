import React, { useContext } from "react";
import ProfileImage2 from "../../images/img/2.jpg";
import LiveVideoIcon from "../../images/svg/live_video.svg";
import PhotoIcon from "../../images/svg/photo.svg";
import SmileIcon from "../../images/svg/smile.svg";
import { FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const CreatePost = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const hanldeSendToCreatePost = (e) => {
    navigate("/create-post");
  };
  return (
    <div className="createPost" onClick={(e) => hanldeSendToCreatePost(e)}>
      <div className="input">
        <div
          className="globalRoundProfile"
          //style={{ "background-image": "url(./img/2.jpg)" }}
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
        <div className="post">What's on your mind, Shazid Morshed?</div>
      </div>
      <div className="buttons">
        <span>
          <div className="svg">
            {/* <img src={FaVideo} alt={LiveVideoIcon} /> */}
            <FaVideo size="large" />
          </div>
          <h4>Live Video</h4>
        </span>
        <span>
          <div className="svg">
            <img src={PhotoIcon} alt={PhotoIcon} />
          </div>
          <h4>Photo/Video</h4>
        </span>
        <span>
          <div className="svg">
            <img src={SmileIcon} alt={SmileIcon} />
          </div>
          <h4>Feeling/Activity</h4>
        </span>
      </div>
    </div>
  );
};

export default CreatePost;
