import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Tracks } from "../redux/actions";
import "./Album.css";
import SongBar from "./SongBar/SongBar";
function Album() {
  const dispatch = useDispatch();
  const storeTracks = useSelector((state) => state.Tracks);
  const fPlaylists = useSelector((state) => state.FeaturedPlalists);
  const PlaylistsCov = useSelector((state) => state.PlaylistCover);
  console.log(fPlaylists && fPlaylists.data.playlists.items.length);

  const getPlaylistsTrack = async () => {
    axios
      .get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(Tracks(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPlaylistsTrack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const id = window.location.pathname.split(":")[1];

  return (
    <div className="ablumContainer">
      <div className="playlistDetails">
        <div className="playlistImage">
          <img src={PlaylistsCov} className="playListImage1" alt="SongImage" />
          {/* <h2>{name}</h2> */}
        </div>
      </div>
      {storeTracks &&
        storeTracks.items.map((item, index) => {
          return (
            <SongBar
              time={item.track.duration_ms}
              imgurl={item.track.album.images[0]}
              name={item.track.name}
              url={item.track.preview_url}
              id={item.track.id}
            />
          );
        })}
    </div>
  );
}

export default Album;
