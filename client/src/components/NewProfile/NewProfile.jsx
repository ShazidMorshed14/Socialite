import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../commons/helper";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
import ProfileTop from "../ProfileTop/ProfileTop";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";

const NewProfile = () => {
  const [myposts, setMyPosts] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAllMyPosts = () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    setLoading(true);

    axios
      .get(`${API_URL}/mypost`, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          setLoading(false);
          setMyPosts(response.data.mypost);
          //console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
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
      .put(`${API_URL}/like`, reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          //setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = myposts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setMyPosts(newPosts);
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
      .put(`${API_URL}/unlike`, reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          // setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = myposts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setMyPosts(newPosts);
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
      .put(`${API_URL}/comment`, reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          //setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = myposts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setMyPosts(newPosts);
          toast.success("Comment Added Successfully!");
        }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
      });
  }

  useEffect(() => {
    fetchAllMyPosts();
  }, []);

  return (
    <div className="home-section-wrapper">
      <div className="sideBarContainer">
        <SidebarLeft />
        <SidebarRight />
      </div>
      <div className="sectionCenter">
        <ProfileTop posts={myposts} />
        <CreatePost />
        {loading ? (
          <>Loading...</>
        ) : (
          <PostList
            posts={myposts}
            likePost={likePost}
            unlikePost={unlikePost}
            makeComment={makeComment}
          />
        )}
      </div>
    </div>
  );
};

export default NewProfile;
