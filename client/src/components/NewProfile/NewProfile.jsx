import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import PostList from "../PostList/PostList";
import ProfileTop from "../ProfileTop/ProfileTop";
import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";

const NewProfile = () => {
  return (
    <div className="home-section-wrapper">
      <div className="sideBarContainer">
        <SidebarLeft />
        <SidebarRight />
      </div>
      <div className="sectionCenter">
        <ProfileTop />
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
};

export default NewProfile;
