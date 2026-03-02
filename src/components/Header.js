import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeUser, addUser } from "../utils/userSlice";
import { logo, profile_icon } from "../utils/constants";
import { toggleGptSearchView, setHomeView } from "../utils/gptSlice";
import { Supported_Languages } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useEffect(() => {
    // check localStorage for persisted user and expiry
    const stored = localStorage.getItem("user");
    const expiry = parseInt(localStorage.getItem("sessionExpiry") || "0", 10);
    const now = Date.now();
    if (stored && expiry > now && !user) {
      // restore user if redux lost it (e.g. after refresh)
      dispatch(addUser(JSON.parse(stored)));
    }
    if (expiry && now >= expiry) {
      // session expired
      dispatch(removeUser());
      localStorage.removeItem("user");
      localStorage.removeItem("sessionExpiry");
      navigate("/");
      return;
    }
    // always route based on user state
    if (user) {
      navigate("/browse");
      // schedule automatic logout
      const timeout = expiry - now;
      if (timeout > 0) {
        const timer = setTimeout(() => {
          dispatch(removeUser());
          localStorage.removeItem("user");
          localStorage.removeItem("sessionExpiry");
          navigate("/");
        }, timeout);
        return () => clearTimeout(timer);
      }
    } else {
      navigate("/");
    }
  }, [user, navigate, dispatch]);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleSignOut = () => {
    dispatch(removeUser());
    localStorage.removeItem("user");
    localStorage.removeItem("sessionExpiry");
    navigate("/");
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const handleLogoClick = () => {
    dispatch(setHomeView());
  };
  return (
    <div className="fixed px-8 py-4 bg-black z-50 w-full flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0 z-100 bg-black"
        src={logo}
        alt="logo"
        onClick={handleLogoClick}
      />
      {user && (
        <div className="justify-between flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {Supported_Languages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mr-5"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "Gemini Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 mr-5"
            src={user?.photoURL}
            alt="profile image"
          />
          <button className="underline text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
