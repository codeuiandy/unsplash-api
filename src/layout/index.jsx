import React, { useContext } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./layout.css";
import {
  ResponsivenessContext,
  showSideBar,
  setshowSideBar,
} from "../context/responsiveness";
export default function Index({ children }) {
  const { setshowSideBar, showSideBar } = useContext(ResponsivenessContext);
  return (
    <div>
      <div className="app-wrap">
        <div
          className={`sidebar-wrap ${
            showSideBar ? "showSideBar" : "hideSidebar"
          }`}
        >
          <Sidebar />
        </div>
        <div className="app-main">
          <Navbar />
          <div className="app-children">{children}</div>
        </div>
      </div>
    </div>
  );
}
