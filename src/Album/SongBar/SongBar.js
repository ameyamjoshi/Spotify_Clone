import React from "react";
import "./SongBar.css";

import { useDispatch } from "react-redux";
import { CurrentSong } from "../../redux/actions";

function SongBar(props) {
  const dispatch = useDispatch();
  return (
    <div className="songbarContainer">
      {props.url != null ? (
        <>
          <div
            className="innerSongs"
            onClick={() => {
              dispatch(CurrentSong(props));
            }}
          >
            <div className="playButton">
              {props.imgurl.url !== null ? (
                <img
                  src={props.imgurl.url}
                  className="songImage1"
                  alt="SongImage"
                />
              ) : (
                <img
                  src="https://picsum.photos/200/300/?blur"
                  className="songImage"
                  alt="SongImage"
                />
              )}
            </div>

            <div className="songName">{props.name}</div>
          </div>
          <div className="time">
            {" "}
            {Math.round(props.time / 1000 / 60)}:
            {Math.round((props.time / 1000) % 60)}
          </div>
        </>
      ) : (
        <>
          <div style={{ cursor: "not-allowed" }}></div>
          <div
            className="playButton"
            style={{
              color: "#b5b6ba",
            }}
          >
            {props.imgurl.url !== null ? (
              <img
                src={props.imgurl.url}
                className="songImage1"
                alt="SongImage"
              />
            ) : (
              <img
                src="https://picsum.photos/200/300/?blur"
                className="songImage"
                alt="SongImage"
              />
            )}
          </div>
          <div className="songName" style={{ color: "#b5b6ba" }}>
            {props.name}
          </div>
          <div className="time" style={{ opacity: 0.5 }}>
            {Math.round(props.time / 1000 / 60)}:
            {Math.round((props.time / 1000) % 60)}
          </div>
        </>
      )}
    </div>
  );
}

export default SongBar;
