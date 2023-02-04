import React from "react";
import Profile1 from "../../images/img/1.jpg";
import Post1 from "../../images/img/post-2.jpg";
import LikeIcon from "../../images/svg/like.svg";
import HeartIcon from "../../images/svg/heart.svg";
import CareIcon from "../../images/svg/care.svg";
import LightLikeIcon from "../../images/svg/like_light.svg";
import CommentIcon from "../../images/svg/comment.svg";
import ShareIcon from "../../images/svg/share.svg";

const PostBox = () => {
  return (
    <div className="mainPosts">
      <div className="title">
        <div className="profile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${Profile1})`,
            }}
          >
            <span />
          </div>
          <div className="name">
            <a href="#">User Name</a>
            <span>
              1h <i className="fa fa-globe-americas" />
            </span>
          </div>
        </div>
        <i className="fa fa-ellipsis-h" />
      </div>
      <div className="description">
        LandingPage UI Design Using Html Css/Sass JS
      </div>
      <div
        className="post"
        //style={{ "background-image": "url(./img/post-1.jpg)" }}
        style={{
          backgroundImage: `url(${Post1})`,
        }}
      />
      <div className="reaction">
        <div className="icons">
          <div className="svg">
            <img src={LikeIcon} alt={LikeIcon} />
          </div>
          <div className="svg">
            <img src={HeartIcon} alt={HeartIcon} />
          </div>
          <div className="svg">
            <img src={CareIcon} alt={CareIcon} />
          </div>
          <a href="#">32k</a>
        </div>
      </div>
      <div className="likeShare">
        <span>
          <div className="svg">
            <img src={LightLikeIcon} alt={LightLikeIcon} />
          </div>
          <h3>Like</h3>
        </span>
        <span>
          <div className="svg">
            <img src={CommentIcon} alt={CommentIcon} />
          </div>
          <h3>Comment</h3>
        </span>
        <span>
          <div className="svg">
            <img src={ShareIcon} alt={ShareIcon} />
          </div>
          <h3>Share</h3>
        </span>
      </div>
    </div>
  );
};

export default PostBox;
