import React, { useContext, useEffect, useState } from "react";
import Profile from "../../images/img/profile.jpg";
import BellLightSvg from "../../images/svg/bellLight.svg";
import MegaPhoneSvg from "../../images/svg/megaphone.svg";
import Profile1 from "../../images/img/1.jpg";
import Profile2 from "../../images/img/2.jpg";
import Profile3 from "../../images/img/3.jpg";
import Profile4 from "../../images/img/4.jpg";
import Profile5 from "../../images/img/5.jpg";
import Profile6 from "../../images/img/6.jpg";
import { UserContext } from "../../App";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../commons/helper";

const SidebarRight = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState();

  const fetchUserDetails = () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    };

    setLoading(true);

    axios
      .get(`${API_URL}/user/profile/details`, {
        headers: headers,
      })
      .then((response) => {
        //console.log("success response", response.data);
        if (response.data.user) {
          setUserDetails(response.data);
          console.log("user details", response.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="sidebar right">
      <div className="container borderNone">
        <div className="mainTitle">
          <h3>Your Pages</h3>
          <i className="fa fa-ellipsis-h" />
        </div>
        <div className="globalProfile">
          <div
            className="globalRoundProfile"
            //style={{ "background-image": "url(./img/profile.jpg)" }}
            style={{
              backgroundImage: `url(${
                state
                  ? state.pic
                  : "https://res.cloudinary.com/aventra/image/upload/v1676883327/default-avatar-png_okjzqd.png"
              })`,
            }}
          />
          <div className="name">My Page</div>
        </div>
        <div className="globalProfile globalProfileSmall">
          <div className="svg">
            <img src={BellLightSvg} alt />
          </div>
          <div className="name">25 Notifications</div>
        </div>
        <div className="globalProfile globalProfileSmall">
          <div className="svg">
            <img src={MegaPhoneSvg} alt />
          </div>
          <div className="name">Create Promotion</div>
        </div>
      </div>
      <div className="container">
        <div className="mainTitle">
          <h3 className="padding">Contacts</h3>
          <div className="items icons">
            <i className="fa fa-video" />
            <i className="fa fa-search" onClick={() => navigate("/search")} />
            <i className="fa fa-ellipsis-h" />
          </div>
        </div>
        {userDetails &&
          userDetails.user.following.map((following) => (
            <Link to={`/profile/${following._id}`}>
              <div className="globalProfile">
                <div
                  className="globalRoundProfile"
                  style={{
                    backgroundImage: `url(${
                      following.pic !== "no photo" ? following.pic : Profile
                    })`,
                  }}
                >
                  <div className="active" />
                </div>
                <div className="name">{following.name}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SidebarRight;
