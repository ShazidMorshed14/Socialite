import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../App";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
// import ProfileTop from "../ProfileTop/ProfileTop";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import UserProfileTop from "../UserProfileTop/UserProfileTop";

const UserProfile = () => {
  const { state, dispatch } = useContext(UserContext);
  const { userId } = useParams();

  const [showFollow, setShowFollow] = useState(
    state ? !state.following.includes(userId) : true
  );

  const [userProfile, setUserProfile] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prof, setProf] = useState();

  const fetchAllUserDetails = (userId) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    setLoading(true);

    axios
      .get(`/user/${userId}`, {
        headers: headers,
      })
      .then((response) => {
        console.log("user details response", response.data);
        if (response.data) {
          setUserProfile(response.data);
          setUserPosts(response.data.posts);
          setLoading(false);
          setProf(response.data);
          //console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("User Not Found!", {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
        setLoading(false);
      });
  };

  function likePost(id) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    //setLoading(true);

    const reqBody = {
      postId: id,
    };

    axios
      .put("/like", reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          //setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = userPosts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setUserPosts(newPosts);
        }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  function unlikePost(id) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    //setLoading(true);

    const reqBody = {
      postId: id,
    };

    axios
      .put("/unlike", reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          // setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = userPosts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setUserPosts(newPosts);
        }
      })
      .catch((error) => {
        console.log(error);
        // setLoading(false);
      });
  }

  function makeComment(text, postId) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    //setLoading(true);

    const reqBody = {
      postId: postId,
      text: text,
    };

    axios
      .put("/comment", reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          //setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = userPosts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setUserPosts(newPosts);
          toast.success("Comment Added Successfully!");
        }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  function followUser() {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    //setLoading(true);

    const reqBody = {
      followId: userId,
    };

    axios
      .put("/follow", reqBody, {
        headers: headers,
      })
      .then((response) => {
        console.log("follow response", response.data);
        if (response.data) {
          dispatch({
            type: "UPDATE",
            payload: {
              following: response.data.following,
              followers: response.data.followers,
            },
          });
          localStorage.setItem("user", JSON.stringify(response.data));
          setShowFollow(false);
          setProf((prevState) => {
            return {
              user: {
                ...prevState.user,
                followers: [...prevState.user.followers, response.data._id],
              },
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  function unfollowUser() {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    //setLoading(true);

    const reqBody = {
      followId: userId,
    };

    axios
      .put("/unfollow", reqBody, {
        headers: headers,
      })
      .then((response) => {
        console.log("unfollow response", response.data);
        if (response.data) {
          dispatch({
            type: "UPDATE",
            payload: {
              following: response.data.following,
              followers: response.data.followers,
            },
          });
          localStorage.setItem("user", JSON.stringify(response.data));
          setShowFollow(true);

          setProf((prevState) => {
            const newFollower = prevState.user.followers.filter(
              (item) => item !== response.data._id
            );
            return {
              user: {
                ...prevState.user,
                followers: newFollower,
              },
            };
          });
        }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  useEffect(() => {
    fetchAllUserDetails(userId);
  }, [userId]);

  return (
    <div className="home-section-wrapper">
      <div className="sideBarContainer">
        <SidebarLeft />
        <SidebarRight />
      </div>
      <div className="sectionCenter">
        {loading ? (
          <>Loading...</>
        ) : userProfile ? (
          <UserProfileTop
            user={userProfile.user}
            posts={userPosts}
            followUser={followUser}
            unfollowUser={unfollowUser}
            prof={prof}
            showFollow={showFollow}
          />
        ) : (
          <></>
        )}

        {/* <CreatePost /> */}
        {loading ? (
          <>Loading...</>
        ) : (
          <PostList
            posts={userPosts}
            likePost={likePost}
            unlikePost={unlikePost}
            makeComment={makeComment}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
