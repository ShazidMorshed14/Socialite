import axios from "axios";
import React from "react";
import "../../styles/common.scss";
import { toast } from "react-toastify";

const FileUpload = ({
  files,
  setFiles,
  removeFile,
  loading,
  setLoading,
  setPhoto,
}) => {
  const uploadHandler = (event) => {
    let file = event.target.files[0];
    if (!file) return;
    //file.isUploading = true;
    //setFiles([...files, file]);
    setFiles([file]);

    //socialite-->upload preset in cloudinary
    // upload file
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "socialite");
    formData.append("cloud_name", "aventra");

    setLoading(true);
    //uploading file to cloudinary
    axios
      .post("https://api.cloudinary.com/v1_1/aventra/image/upload", formData)
      .then((res) => {
        console.log("file upload response", res.data);
        setFiles([...files, file]);
        console.log("set photo url", res.data.url);
        setPhoto(res.data.url);
        toast.success("File Uploaded Successfully!", {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
        setLoading(false);
      })
      .catch((err) => {
        // inform the user
        console.error(err);
        removeFile(file.name);
        setLoading(false);
        toast.error("File Upload Failed", {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    let file = event.target.files[0];
    if (!file) return;
    //file.isUploading = true;
    //setFiles([...files, file]);
    setFiles([file]);

    //socialite-->upload preset in cloudinary
    // upload file
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "socialite");
    formData.append("cloud_name", "aventra");

    setLoading(true);
    //uploading file to cloudinary
    axios
      .post("https://api.cloudinary.com/v1_1/aventra/image/upload", formData)
      .then((res) => {
        console.log("file upload response", res.data);
        setFiles([...files, file]);
        setLoading(false);
        toast.success("Image Uploaded Successfully!", {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      })
      .catch((err) => {
        // inform the user
        console.error(err);
        removeFile(file.name);
        setLoading(false);
        toast.error("File Upload Failed!", {
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      });
  };

  return (
    <div className="file-uploader-wrapper mb-2">
      <div className="file-card">
        <div className="file-inputs">
          <input
            type="file"
            onChange={uploadHandler}
            onDrop={(event) => handleDrop(event)}
            onDragOver={(event) => handleDragOver(event)}
          />
          <button>
            {loading ? (
              <i class="fa fa-circle-o-notch fa-spin"></i>
            ) : (
              <i class="fa fa-plus"></i>
            )}
            Upload
          </button>
        </div>

        <p className="main">Select/Drag and Drop</p>
        <p className="info">JPG, PNG, JPEG</p>
      </div>

      {files.length > 0 ? (
        <div className="file-showing">
          {files.length > 0 &&
            files.map((file) =>
              loading ? (
                <div className="image-wrapper-uploading">
                  <div className="icon-section">
                    <i
                      class="fa fa-circle-o-notch fa-spin"
                      aria-hidden="true"
                      onClick={() => removeFile(file.name)}
                    ></i>
                  </div>
                  <img src={URL.createObjectURL(file)} />
                </div>
              ) : (
                <div className="image-wrapper">
                  <div className="icon-section">
                    <i
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={() => removeFile(file.name)}
                    ></i>
                  </div>
                  <img src={URL.createObjectURL(file)} />
                </div>
              )
            )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FileUpload;
