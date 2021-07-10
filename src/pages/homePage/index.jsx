import React, { useState, useEffect, useContext } from "react";
import Layout from "../../layout/index";
import male from "../../assets/man.jpg";
import "./home.css";
import { ResponsivenessContext } from "../../context/responsiveness";
import { FaHeart, FaThumbsDown, FaMapMarkerAlt } from "react-icons/fa";
import { httpGet } from "../../AppLib/https";
import { showLoader, hideLoader } from "../../helpers/loader";
export default function Index() {
  const {
    setshowSideBar,
    showSideBar,
    setSearchStrings,
    searchStrings,
  } = useContext(ResponsivenessContext);
  const [active, setActive] = useState(false);
  const [Uid, setUid] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(() => {
    getPhotos();
  }, []);
  useEffect(() => {
    queryPhotos();
  }, [searchStrings]);
  const getPhotos = async () => {
    showLoader();
    const res = await httpGet(`photos`);
    console.log(res);
    setImages(res);
    hideLoader();
  };

  const queryPhotos = async () => {
    const res = await httpGet(`search/photos?query=${searchStrings}?count=12`);
    if (res) {
      if (res.er) {
        return alert(`${res.er}, You have exced unsplash search limit`);
      }
    }
    if (res.total == 0) {
      return;
    }
    console.log(res);
    setImages(res.results);
  };
  return (
    <Layout>
      <div className="app-grid">
        {images?.map((data) => {
          return (
            <div
              onclick={() => {
                setUid(data.id);
                setActive(true);
              }}
              onMouseEnter={() => {
                setUid(data.id);
                setActive(!active);
              }}
              onMouseLeave={() => {
                setUid("");
                setActive(false);
              }}
              onMouseOut={() => {
                setUid("");
                setActive(false);
              }}
              className={`unsplashImage`}
            >
              <div className="image-main">
                <img src={data?.urls?.small} alt="" />
                <div
                  className={`active-p-text ${
                    Uid == data.id ? "activeCard" : ""
                  }`}
                >
                  <p>
                    {" "}
                    {data?.user?.name == null ? "None" : data?.user?.name}, 28
                  </p>
                  <p className="userLO">
                    <FaMapMarkerAlt />{" "}
                    {data?.user?.location == null
                      ? "None"
                      : data?.user?.location}
                  </p>
                  <div className="action-btns">
                    <button>
                      <FaHeart />
                    </button>
                    <button>
                      <FaThumbsDown />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
