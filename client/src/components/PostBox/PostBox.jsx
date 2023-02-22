import React, { useContext, useState } from "react";
import Profile1 from "../../images/img/1.jpg";
import Post1 from "../../images/img/post-2.jpg";
import LikeIcon from "../../images/svg/like.svg";
import ColorLikeIcon from "../../images/svg/facebook_liked.svg";
import HeartIcon from "../../images/svg/heart.svg";
import CareIcon from "../../images/svg/care.svg";
import LightLikeIcon from "../../images/svg/like_light.svg";
import CommentIcon from "../../images/svg/comment.svg";
import ShareIcon from "../../images/svg/share.svg";
import { UserContext } from "../../App";
import ProfileImage2 from "../../images/img/2.jpg";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import DefaultProPic from "../../images/img/default-avatar.png";

const PostBox = ({ post, likePost, unlikePost, makeComment, deletePost }) => {
  console.log("post details", post);

  const { state, dispatch } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleCommentAdd = (e, postId) => {
    e.preventDefault();
    if (comment) {
      console.log("comment", comment, postId);
      makeComment(comment, postId);
      setComment("");
    } else {
      toast.error("Please give valid comment");
    }
  };

  const handleDeletePost = (postId) => {
    deletePost(postId);
  };

  return (
    <div className="mainPosts">
      <div className="title">
        <div className="profile">
          <div
            className="globalRoundProfile"
            style={{
              backgroundImage: `url(${
                post.postedby.pic ? post.postedby.pic : DefaultProPic
              })`,
            }}
          >
            <span />
          </div>
          <div className="name">
            <Link
              to={
                state._id === post.postedby._id
                  ? "/profile"
                  : `/profile/${post.postedby._id}`
              }
            >
              {post.postedby.name}
            </Link>
            <span>
              1h <i className="fa fa-globe-americas" />
            </span>
          </div>
        </div>
        <div>
          {state._id == post.postedby._id ? (
            <i
              class="fa fa-trash"
              style={{ marginRight: "5px" }}
              onClick={() => handleDeletePost(post._id)}
            />
          ) : (
            <></>
          )}
          <i className="fa fa-ellipsis-h" />
        </div>
      </div>
      <div className="description">{post.body}</div>
      {post.photo !== "no photo" ? (
        <div
          className="post"
          //style={{ "background-image": "url(./img/post-1.jpg)" }}
          style={{
            backgroundImage: `url(${post.photo})`,
          }}
        />
      ) : (
        <></>
      )}
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
          {post.likes.includes(state._id) ? (
            <a href="#">You and {post.likes.length} liked this post!</a>
          ) : (
            <a href="#">{post.likes.length} likes</a>
          )}
        </div>
      </div>
      <div className="likeShare">
        <span>
          {post.likes.includes(state._id) ? (
            <span>
              <div className="svg" onClick={() => unlikePost(post._id)}>
                <img src={ColorLikeIcon} alt={ColorLikeIcon} />
              </div>
              <h3>Like</h3>
            </span>
          ) : (
            <span>
              <div className="svg" onClick={() => likePost(post._id)}>
                <img src={LightLikeIcon} alt={LightLikeIcon} />
              </div>
              <h3>Like</h3>
            </span>
          )}
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

      {post.comments && post.comments.length > 0 ? (
        <div className="home-section-wrapper">
          <p style={{ margin: "0.5em", cursor: "pointer" }}>
            View all the comments
          </p>
          {post.comments.slice(0, 2).map((comment, index) => (
            <div
              className="createPost"
              style={{ height: "80px" }}
              key={comment._id}
            >
              <div className="input" style={{ border: "none" }}>
                <div
                  className="globalRoundProfile"
                  //style={{ "background-image": "url(./img/2.jpg)" }}
                  style={{
                    backgroundImage: `url(${comment.postedby.pic})`,
                  }}
                >
                  <span />
                </div>
                <div
                  className="comment_showing-box"
                  style={{ width: "100%", marginLeft: "1em" }}
                >
                  <Link
                    to={
                      state._id === comment.postedby._id
                        ? "/profile"
                        : `/profile/${comment.postedby._id}`
                    }
                  >
                    <h6>{comment.postedby.name}</h6>
                  </Link>

                  <p style={{ marginBottom: "0px" }}>{comment.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      <div className="home-section-wrapper">
        <div className="createPost">
          <div
            className="input"
            style={{
              borderTop: "1px solid grey",
              borderBottom: "1px solid grey",
            }}
          >
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
            <div
              className="comment_box"
              style={{ width: "100%", marginLeft: "1em" }}
            >
              <form onSubmit={(e) => handleCommentAdd(e, post._id)}>
                <input
                  className="post"
                  type="text"
                  placeholder="Write a comment here!"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
