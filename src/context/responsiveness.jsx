import React, { createContext, useState, useEffect } from "react";
export const ResponsivenessContext = createContext();
export const ResponsivenessProvider = (props) => {
  const [showSideBar, setshowSideBar] = useState(false);
  const [searchStrings, setSearchStrings] = useState("");
  useEffect(() => {}, []);

  return (
    <ResponsivenessContext.Provider
      value={{
        showSideBar,
        setshowSideBar,
        setSearchStrings,
        searchStrings,
      }}
    >
      {props.children}
    </ResponsivenessContext.Provider>
  );
};
