import axios from "axios";
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "../../styles/common.scss";
import FileUpload from "../FileUpload/FileUpload";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Profile from "../../images/img/profile.jpg";
import { UserContext } from "../../App";

const CreatePostScreen = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(UserContext);

  const [files, setFiles] = useState([]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
    setPhoto("");
  };

  const createPostRequest = (e) => {
    e.preventDefault();
    setLoading(true);

    if (title && body) {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      };

      const reqBody = {
        title: title,
        body: body,
        photo: photo ? photo : "no photo",
      };

      axios
        .post("/createpost", reqBody, {
          headers: headers,
        })
        .then((response) => {
          console.log("success response", response.data);
          if (response.data.post) {
            setLoading(false);
            setTitle("");
            setBody("");
            setPhoto("");
            navigate("/profile");
            toast.success("Post Added Successfully!", {
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              theme: "light",
            });
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
      toast.error("Please Give all the data", {
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "light",
      });
      setLoading(false);
    }
  };

  return (
    <div className="create-post-screen-wrapper">
      <Container>
        <Form className="form-style">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div className="form-top-avatar">
              <img
                src={
                  state
                    ? state.pic
                    : "https://res.cloudinary.com/aventra/image/upload/v1676883327/default-avatar-png_okjzqd.png"
                }
                alt=""
                srcset=""
              />
              <Form.Label className="form-lable-txt ml-2">
                Shazid Morshed
              </Form.Label>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="form-lable-txt">
              Title <span className="required-span">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input-text-bold "
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="form-lable-txt">
              Description <span className="required-span">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="What's on Your mind?"
              style={{ height: "100px" }}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

          <div>
            <FileUpload
              files={files}
              setFiles={setFiles}
              removeFile={removeFile}
              loading={loading}
              setLoading={setLoading}
              setPhoto={setPhoto}
            />
          </div>

          <div className="button-section">
            <div className="button-stack">
              <Button
                variant="danger"
                size="large"
                style={{ marginRight: "5px" }}
              >
                Cancel
              </Button>

              {loading ? (
                <button class="btn btn-primary btn-md">
                  Save <i class="fa fa-circle-o-notch fa-spin"></i>
                </button>
              ) : (
                <button
                  class="btn btn-primary btn-md"
                  onClick={(e) => createPostRequest(e)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreatePostScreen;
