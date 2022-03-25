import React from "react";
// import { useDispatch } from "react-redux";



import { NavLink } from "react-router-dom";
import "./SideBar.css";

import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

function SideBar() {
  // const dispatch = useDispatch();
  return (
    <div className='sideContainer'>
      <div className='logoContainer'>
        <img src='spotifylogo1.png' alt='Logo' className='sideBarLogo' />
      </div>
      <div className='leftColList'>
       
          <NavLink
            exact
            to={"/"}
            className='leftListElem'
            activeClassName='sideMenuActive'>
            <HomeRoundedIcon style={{ fontSize: 32 }}/>
            <span className="linkText">Home</span>
          </NavLink>
          <NavLink
            exact
            to={"/profile"}
            className='leftListElem'
            activeClassName='sideMenuActive'>
            <AccountCircleRoundedIcon style={{ fontSize: 32 }}/>
            <span className="linkText">Profile</span>
          </NavLink>

          <NavLink
            exact
            to={"/search"}
            className='leftListElem'
            activeClassName='sideMenuActive'>
            <SearchRoundedIcon style={{ fontSize: 32 }}/>
            <span className="linkText">Search</span>
          </NavLink>

          <NavLink
            exact
            to={"/featuredPlaylists"}
            className='leftListElem'
            activeClassName='sideMenuActive'>
            <QueueMusicRoundedIcon  style={{ fontSize: 32 }}/>
            <span className="linkText">Featured Playlists</span>
          </NavLink>
          <a href='https://www.spotify.com/logout/'>
            <span
           
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("LoggedIn");
                // AuthenticationClient.clearCookies(getApplication());

                // dispatch(CurrentSong(null))
                // dispatch(isLoggedout());
              }}
              className='leftListElem'
              id='logOut'>
              <ExitToAppRoundedIcon style={{ fontSize: 32 }}/>
              <span  className="linkText">Logout</span>
            </span>
          </a>
       
      </div>
    </div>
  );
}

export default SideBar;
