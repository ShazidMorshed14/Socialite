import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import "../Home/Home.scss";
import PostList from "../PostList/PostList";
import RoomList from "../RoomList/RoomList";

import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import StoryList from "../StoryList/StoryList";

const Home = () => {
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
        <PostList />
      </div>
    </div>
  );
};

export default Home;
