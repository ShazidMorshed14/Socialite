import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import NewProfile from "./components/NewProfile/NewProfile";
import CreatePostScreen from "./components/CreatePostScreen/CreatePostScreen";
import { createContext } from "react";
import { useReducer } from "react";
import { initialState, reducer } from "./components/Reducers/userReducer";
import { useContext } from "react";
import UserProfile from "./components/UserProfile/UserProfile";

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      // navigate("/");
    } else {
      navigate("/signin");
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/profile" element={<NewProfile />} />
      <Route exact path="/create-post" element={<CreatePostScreen />} />
      <Route exact path="/profile/:userId" element={<UserProfile />} />
    </Routes>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;
