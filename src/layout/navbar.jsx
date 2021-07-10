import React, { useContext } from "react";
import { Container } from "../AppLib/lib";
import {
  FaSearch,
  FaBell,
  FaCaretDown,
  FaGripHorizontal,
  FaTimes,
} from "react-icons/fa";
import userImg from "../assets/codeuiandyIMg.png";
import {
  ResponsivenessContext,
  showSideBar,
  setshowSideBar,
} from "../context/responsiveness";
export default function Navbar() {
  const {
    setshowSideBar,
    showSideBar,
    setSearchStrings,
    searchStrings,
  } = useContext(ResponsivenessContext);
  const getInputValue = (e) => {
    e.preventDefault();
    setSearchStrings(e.target.value);
  };
  return (
    <Container width="100%" display="flex" className="search-app-nav">
      <form>
        <div className="navbar-search-icon">
          <FaSearch />
        </div>

        <input
          type="text"
          placeholder="Find something..."
          onChange={getInputValue}
        />
        <div className="navbar-search-button">
          <button onClick={getInputValue}>Search</button>
        </div>
      </form>
      <div className="user-img-con">
        <div className="nav-notification">
          <FaBell />
        </div>
        <div className="user-img">
          <img src={userImg} alt="" /> <span>CODE UI ANDY </span>{" "}
          <FaCaretDown />
        </div>
      </div>
      <div className="hideburgerMenuOnDesktop">
        <p
          onClick={() => {
            setshowSideBar(!showSideBar);
          }}
        >
          {showSideBar ? <FaTimes /> : <FaGripHorizontal />}
        </p>
      </div>
    </Container>
  );
}
