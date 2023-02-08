import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import NewProfile from "./components/NewProfile/NewProfile";
import CreatePostScreen from "./components/CreatePostScreen/CreatePostScreen";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<NewProfile />} />
          <Route exact path="/create-post" element={<CreatePostScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
