import React from "react";
import Profile1 from "../../images/img/1.jpg";
import Profile2 from "../../images/img/2.jpg";
import Profile3 from "../../images/img/3.jpg";
import Profile4 from "../../images/img/4.jpg";
import Profile5 from "../../images/img/5.jpg";
import Profile6 from "../../images/img/6.jpg";

import Post1 from "../../images/img/post-1.jpg";
import PostBox from "../PostBox/PostBox";

const PostList = () => {
  return (
    <div>
      {/* <div className="mainPosts">
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
              <img src="./svg/like.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/heart.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/care.svg" alt />
            </div>
            <a href="#">32k</a>
          </div>
        </div>
        <div className="likeShare">
          <span>
            <div className="svg">
              <img src="./svg/like_light.svg" alt />
            </div>
            <h3>Like</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/comment.svg" alt />
            </div>
            <h3>Comment</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/share.svg" alt />
            </div>
            <h3>Share</h3>
          </span>
        </div>
      </div>
      <div className="mainPosts">
        <div className="title">
          <div className="profile">
            <div
              className="globalRoundProfile"
              style={{ "background-image": "url(./img/2.jpg)" }}
            >
              <span />
            </div>
            <div className="name">
              <a href="#">User Name</a>
              <span>
                1h <i className="fas fa-globe-americas" />
              </span>
            </div>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="description">
          LandingPage UI Design Using Html Css/Sass JS
        </div>
        <div
          className="post"
          style={{ "background-image": "url(./img/post-2.jpg)" }}
        />
        <div className="reaction">
          <div className="icons">
            <div className="svg">
              <img src="./svg/like.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/heart.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/care.svg" alt />
            </div>
            <a href="#">32k</a>
          </div>
        </div>
        <div className="likeShare">
          <span>
            <div className="svg">
              <img src="./svg/like_light.svg" alt />
            </div>
            <h3>Like</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/comment.svg" alt />
            </div>
            <h3>Comment</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/share.svg" alt />
            </div>
            <h3>Share</h3>
          </span>
        </div>
      </div>
      <div className="mainPosts">
        <div className="title">
          <div className="profile">
            <div
              className="globalRoundProfile"
              style={{ "background-image": "url(./img/3.jpg)" }}
            >
              <span />
            </div>
            <div className="name">
              <a href="#">User Name</a>
              <span>
                1h <i className="fas fa-globe-americas" />
              </span>
            </div>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="description">
          LandingPage UI Design Using Html Css/Sass JS
        </div>
        <div
          className="post"
          style={{ "background-image": "url(./img/post-3.jpg)" }}
        />
        <div className="reaction">
          <div className="icons">
            <div className="svg">
              <img src="./svg/like.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/heart.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/care.svg" alt />
            </div>
            <a href="#">32k</a>
          </div>
        </div>
        <div className="likeShare">
          <span>
            <div className="svg">
              <img src="./svg/like_light.svg" alt />
            </div>
            <h3>Like</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/comment.svg" alt />
            </div>
            <h3>Comment</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/share.svg" alt />
            </div>
            <h3>Share</h3>
          </span>
        </div>
      </div>
      <div className="mainPosts">
        <div className="title">
          <div className="profile">
            <div
              className="globalRoundProfile"
              style={{ "background-image": "url(./img/4.jpg)" }}
            >
              <span />
            </div>
            <div className="name">
              <a href="#">User Name</a>
              <span>
                1h <i className="fas fa-globe-americas" />
              </span>
            </div>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="description">
          LandingPage UI Design Using Html Css/Sass JS
        </div>
        <div
          className="post"
          style={{ "background-image": "url(./img/post-4.jpg)" }}
        />
        <div className="reaction">
          <div className="icons">
            <div className="svg">
              <img src="./svg/like.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/heart.svg" alt />
            </div>
            <div className="svg">
              <img src="./svg/care.svg" alt />
            </div>
            <a href="#">32k</a>
          </div>
        </div>
        <div className="likeShare">
          <span>
            <div className="svg">
              <img src="./svg/like_light.svg" alt />
            </div>
            <h3>Like</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/comment.svg" alt />
            </div>
            <h3>Comment</h3>
          </span>
          <span>
            <div className="svg">
              <img src="./svg/share.svg" alt />
            </div>
            <h3>Share</h3>
          </span>
        </div>
      </div> */}
      <PostBox />
      <PostBox />
      <PostBox />
      <PostBox />
    </div>
  );
};

export default PostList;
