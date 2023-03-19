import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import CreatePost from "../CreatePost/CreatePost";
import "../Home/Home.scss";
import PostList from "../PostList/PostList";
import RoomList from "../RoomList/RoomList";
import Search from "../Search/Search";

import SidebarLeft from "../SidebarLeft/SidebarLeft";
import SidebarRight from "../SidebarRight/SidebarRight";
import StoryList from "../StoryList/StoryList";

const SearchScreen = () => {
  return (
    <div className="home-section-wrapper">
      <div className="sideBarContainer">
        <SidebarLeft />
        <SidebarRight />
      </div>
      <div className="sectionCenter">
        <Search />
      </div>
    </div>
  );
};

export default SearchScreen;
