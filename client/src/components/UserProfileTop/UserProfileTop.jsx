import React, { useContext } from "react";
import { UserContext } from "../../App";
import DefaultProPic from "../../images/img/default-avatar.png";

const UserProfileTop = ({ user, posts }) => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div className="profile-top-wrapper">
      <div className="row">
        <div className="col-md-12 mx-auto">
          {/* Profile widget */}
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img
                    //src={user && user.photo ? user.photo : DefaultProPic}
                    src={DefaultProPic}
                    alt="..."
                    width={130}
                    className="rounded mb-2 img-thumbnail"
                  />
                  <a className="btn btn-outline-dark btn-sm btn-block">
                    Follow
                  </a>
                </div>
                <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-0">{user.name}</h4>
                  <p className="small mb-4">
                    {" "}
                    <i className="fas fa-map-marker-alt mr-2" />
                    {/* {user && user.city ? user.city : "Bangladesh"} */}
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                {/* <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">215</h5>
                  <small className="text-muted">
                    {" "}
                    <i className="fa fa-image mr-1" />
                    Photos
                  </small>
                </li> */}
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">745</h5>
                  <small className="text-muted">
                    {" "}
                    <i className="fa fa-user mr-1" />
                    Followers
                  </small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">340</h5>
                  <small className="text-muted">
                    {" "}
                    <i className="fa fa-user mr-1" />
                    Following
                  </small>
                </li>
              </ul>
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              <div className="p-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0">Web Developer</p>
                <p className="font-italic mb-0">Lives in New York</p>
                <p className="font-italic mb-0">Photographer</p>
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent photos</h5>
                <a href="#" className="btn btn-link text-muted">
                  Show all
                </a>
              </div>
              <div className="row">
                {posts &&
                  posts.slice(0, 4).map((post) => (
                    <div className="col-3 mb-2 pr-lg-1" key={post._id}>
                      <img
                        src={post.photo}
                        alt=""
                        className="img-fluid rounded shadow-sm"
                        style={{ height: "170px" }}
                      />
                    </div>
                  ))}

                {/* <div className="col-3 mb-2 pl-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-3 pr-lg-1 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
                <div className="col-3 pl-lg-1">
                  <img
                    src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    alt=""
                    className="img-fluid rounded shadow-sm"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileTop;
