import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CreatePost from "../CreatePost/CreatePost";
import "../Home/Home.scss";
import PostList from "../PostList/PostList";
import RoomList from "../RoomList/RoomList";

import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import StoryList from "../StoryList/StoryList";

const Home = () => {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAllPosts = () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    setLoading(true);

    axios
      .get("/allpost", {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          setLoading(false);
          setPosts(response.data);
          console.log(response.data);
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
      .put("/like", reqBody, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          //setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = posts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setPosts(newPosts);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error, {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
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
          const newPosts = posts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setPosts(newPosts);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error, {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
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
          const newPosts = posts.map((item) => {
            if (item._id == response.data._id) {
              return response.data;
            } else {
              return item;
            }
          });

          setPosts(newPosts);
          toast.success("Comment Added Successfully!", { autoClose: 1000 });
        }
      })
      .catch((error) => {
        console.log(error);
        //setLoading(false);
        toast.error(error.response.data.error, {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      });
  }

  function deletePost(postId) {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    axios
      .delete(`/deletepost/${postId}`, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data) {
          //setLoading(false);
          // setPosts(response.data);
          console.log(response.data);
          const newPosts = posts.filter((p) => p._id !== response.data._id);
          setPosts(newPosts);
          toast.error("Post Deleted Successfully!", { autoClose: 1000 });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error, {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
        //setLoading(false);
      });
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="home-section-wrapper">
      <div className="sideBarContainer">
        <SidebarLeft />
        <SidebarRight />
      </div>
      <div className="sectionCenter">
        <StoryList />
        <CreatePost />
        <RoomList />
        {loading ? (
          <>Loading...</>
        ) : (
          <PostList
            posts={posts}
            likePost={likePost}
            unlikePost={unlikePost}
            makeComment={makeComment}
            deletePost={deletePost}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
