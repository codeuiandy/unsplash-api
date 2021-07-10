import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { Center, Margin } from "../AppLib/lib";
import {
  FaHome,
  FaBookReader,
  FaPaperclip,
  FaSortAmountUpAlt,
  FaSms,
  FaMusic,
  FaRestroom,
  FaRegObjectGroup,
} from "react-icons/fa";
import userImg from "../assets/codeuiandyIMg.png";
import {
  ResponsivenessContext,
  showSideBar,
  setshowSideBar,
} from "../context/responsiveness";
export default function Sidebar() {
  const { setshowSideBar, showSideBar } = useContext(ResponsivenessContext);
  return (
    <div>
      <div className="appLogo">
        <img src={Logo} alt="" />
      </div>

      <div className="user-img-respoS">
        <div>
          <img src={userImg} alt="" />
          <span>CODE UI ANDY </span>
        </div>{" "}
      </div>

      <div className="navbarList">
        <ul>
          <li>
            <span>
              <FaHome />
            </span>{" "}
            Home
          </li>

          <li>
            <span>
              <FaSms />
            </span>{" "}
            Message
          </li>

          <li>
            <span>
              <FaSortAmountUpAlt />
            </span>{" "}
            Ranking
          </li>

          <li>
            <span>
              <FaBookReader />
            </span>{" "}
            Challenge
          </li>

          <li>
            <span>
              <FaMusic />
            </span>{" "}
            Party
          </li>

          <li>
            <span>
              <FaPaperclip />
            </span>{" "}
            Connect
          </li>

          <li>
            <span>
              <FaRestroom />
            </span>{" "}
            Parade
          </li>

          <li>
            <span>
              <FaRegObjectGroup />
            </span>{" "}
            Grops
          </li>
        </ul>
      </div>
    </div>
  );
}
