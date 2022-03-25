import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PlaylistCover } from "../redux/actions";
import "./FeaturedPlaylists.css";
function FeaturedPlaylists() {
  const FeaturedPlaylists2 = useSelector((state) => state.FeaturedPlalists);
  const dispatch = useDispatch();
  return (
    <div className="featuredPlaylistscontainer">
      <div className="headingPlaylists">FeaturedPlaylists</div>
      <div className="playlistF">
        {FeaturedPlaylists2 &&
          FeaturedPlaylists2.data &&
          FeaturedPlaylists2.data.playlists.items.map((item, index) => {
            return (
              <NavLink to={`/album/id:${item.id}`}>
                <div
                  className="card"
                  onClick={() => {
                    dispatch(PlaylistCover(item.images[0].url));
                  }}
                >
                  <div className="img">
                    <img
                      src={item.images[0].url}
                      alt="Song Cover"
                      className="songImage"
                    />
                  </div>
                  <span className="playlistName">
                    {item.name.split(" ").slice(0, 2).join(" ")}
                  </span>
                  {/* <span className='desc'> {item.description.split(' ').slice(0,2).join(' ')||item.description.split('<').slice(0,2).join(' ')}...</span> */}
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

export default FeaturedPlaylists;
