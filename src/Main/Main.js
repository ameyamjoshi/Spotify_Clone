import React from "react";
import { IconContext } from "react-icons";
import { BrowserRouter, Route } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Main.css";
import * as Icons from "react-icons/io";
import { openMenu, closeMenu } from "./MobileSideBar";
import Profile from "../Profile/Profile";
import Home from "./Home/Home";
import FeaturedPlaylists from "../FeaturedPlaylist/FeaturedPlaylists";
import Album from "../Album/Album";

import BottomBar from "../BottomComponent/BottomComponent";
import Search from "../Search/Search";
import { useSelector } from "react-redux";

export default function Main(props) {
  const CurrentSongd = useSelector((state) => state.CurrentSong);

  return (
    <>
      <div>
        <div className="mainContainer">
          <div
            className="topBar"
            onClick={() => {
              closeMenu();
            }}
          ></div>
          <BrowserRouter>
            <div className="leftSideCol" id="sideBar">
              <SideBar />
            </div>

            <IconContext.Provider value={{ className: "hamburgerMenu" }}>
              <Icons.IoMdMenu
                id="hamburgerIcon"
                onClick={() => {
                  openMenu();
                }}
              />
            </IconContext.Provider>
            <div
              className="rightSideCol"
              onClick={() => {
                closeMenu();
              }}
            >
              <Route path="/" exact component={Home} lcs={"HOME"} />
              <Route path="/profile" exact component={Profile} />
              <Route
                path="/featuredPlaylists"
                exact
                component={FeaturedPlaylists}
              />
              <Route path="/search" exact component={Search} />
              <Route path="/album" component={Album} />
            </div>
          </BrowserRouter>
          {CurrentSongd != null ? (
            <div className="bottomBar" id="bottomBarID">
              <BottomBar />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
