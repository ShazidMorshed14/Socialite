import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
// import ProfileTop from "../ProfileTop/ProfileTop";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import UserProfileTop from "../UserProfileTop/UserProfileTop";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { userId } = useParams();

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
          <UserProfileTop user={userProfile.user} posts={userPosts} />
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
