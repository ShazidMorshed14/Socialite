import React, { memo } from "react";
import Profile1 from "../../images/img/1.jpg";
import Profile2 from "../../images/img/2.jpg";
import Profile3 from "../../images/img/3.jpg";
import Profile4 from "../../images/img/4.jpg";
import Profile5 from "../../images/img/5.jpg";
import Profile6 from "../../images/img/6.jpg";

import Post1 from "../../images/img/post-1.jpg";
import PostBox from "../PostBox/PostBox";

const PostList = ({ posts, likePost, unlikePost, makeComment, deletePost }) => {
  console.log("posts from post list", posts);
  return (
    <>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => (
          <PostBox
            post={post}
            key={post._id}
            likePost={likePost}
            unlikePost={unlikePost}
            makeComment={makeComment}
            deletePost={deletePost}
          />
        ))}
    </>
  );
};

export default memo(PostList);
