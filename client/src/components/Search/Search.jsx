import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Profile1 from "../../images/img/1.jpg";
import { BiSad } from "react-icons/bi";
import { API_URL } from "../../commons/helper";

const Search = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (name) {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      };

      setLoading(true);

      const reqBody = {
        name: name,
      };

      axios
        .post(`${API_URL}/search`, reqBody, {
          headers: headers,
        })
        .then((response) => {
          //console.log("success response", response.data);
          if (response.data.users) {
            // setPosts(response.data);
            console.log("search result", response.data);
            setUserList(response.data);
            setLoading(false);
            setName("");
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
          setLoading(false);
        });
    } else {
      toast.error("Please provide a name");
    }
  };

  return (
    <div>
      <div className="search-box-section">
        <Form onSubmit={handleSearch}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Search People</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Search People"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="small">
            Search
          </Button>
        </Form>
      </div>
      <div className="search-result-section">
        {loading ? (
          <>Loading...</>
        ) : userList.users && userList.users.length > 0 ? (
          <>
            {userList.users.map((user) => (
              <Link to={`/profile/${user._id}`}>
                <div className="globalProfile" style={{ margin: "1em 0em" }}>
                  <div
                    className="globalRoundProfile"
                    style={{
                      backgroundImage: `url(${user.pic ? user.pic : Profile1})`,
                    }}
                  >
                    <div className="active" />
                  </div>
                  <div className="name">{user.name}</div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <div className="result_not_found_section">
            <h6>No User Found</h6>
            <BiSad />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
