import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import "./BottomComponent.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import { CurrentSong } from "../redux/actions";

function BottomBar() {
  const CurrentSongd = useSelector((state) => state.CurrentSong);
  const TracksList = useSelector((state) => state.Tracks);

  var url = CurrentSongd && CurrentSongd.url;
  const [playing, setplaying] = useState(false);
  const [audio, setaudio] = useState(new Audio());
  //   setaudio(new Audio(CurrentSong&&CurrentSong.url))
  const [songIndex, setsongIndex] = useState();

  const nextSong = () => {
    if (TracksList !== null) {
      var len = TracksList.items.length;
      var i = 0;
      if (CurrentSongd)
        for (i = 0; i < len; i++) {
          if (CurrentSongd.id === TracksList.items[i].track.id) {
            // console.log(TracksList.items[i].track)
            if (i === len - 2 || i === len - 1) {
              i = -1;
            }
            i++;

            while (
              TracksList.items[i] &&
              TracksList.items[i].track.preview_url === null
            ) {
              i++;
            }
            if (i === len) {
              i = 0;
            }
            var curObj = {
              id: TracksList.items[i].track.id,
              imgurl: TracksList.items[i].track.album.images[0],
              url: TracksList.items[i].track.preview_url,
              name: TracksList.items[i].track.name,
            };
            setsongIndex(i);
            dispatch(CurrentSong(curObj));

            break;
          }
        }
    }
  };

  const prevSong = () => {
    if (TracksList !== null) {
      var len = TracksList.items.length;
      var i = 0;
      if (CurrentSongd)
        for (i = 0; i < len; i++) {
          if (CurrentSongd.id === TracksList.items[i].track.id) {
            // console.log(TracksList.items[i].track)
            if (i === 0) {
              i = len - 1;
            }
            i--;

            while (
              TracksList.items[i] &&
              TracksList.items[i].track.preview_url === null
            ) {
              i--;
            }
            if (i < 0) {
              i = 0;
            }
            var curObj = {
              id: TracksList.items[i].track.id,
              imgurl: TracksList.items[i].track.album.images[0],
              url: TracksList.items[i].track.preview_url,
              name: TracksList.items[i].track.name,
            };
            setsongIndex(i);
            dispatch(CurrentSong(curObj));

            break;
          }
        }
    }
  };

  const useStyles = makeStyles({
    root: {
      width: 100,
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    audio.volume = value / 100;
  };

  useEffect(() => {
    audio.pause();
    setaudio(new Audio(url));
    setplaying(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, songIndex]);

  useEffect(() => {
    audio.addEventListener("ended", () => {
      setplaying(false);
      // console.log("Ended")
      return () => {
        audio.removeEventListener("ended", () => setplaying(false));
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  return (
    <>
      <div className="bottomcomponentContainer">
        <div className="psongName">
          {CurrentSongd != null ? (
            <div className="curSongContainer">
              <div className="curSongImg">
                <img
                  src={CurrentSongd.imgurl.url}
                  className="curSongImg"
                  alt="Images"
                />
              </div>
              <div className="curSongText">
                {/* <img src={CurrentSongd.imgurl.url} className="curSongImg"/> */}
                {CurrentSongd.name}
              </div>
            </div>
          ) : (
            <span>Song Name</span>
          )}
        </div>
        <div className="controls">
          <button
            className="playPausebutton"
            onClick={() => {
              prevSong();
            }}
          >
            <SkipPreviousRoundedIcon />
          </button>
          {playing ? (
            <button
              onClick={() => {
                audio.pause();
                setplaying(false);
              }}
              className="playPausebutton"
            >
              <PauseCircleOutlineIcon />
            </button>
          ) : (
            <button
              className="playPausebutton"
              onClick={() => {
                audio.play();
                setplaying(true);
              }}
            >
              <PlayCircleOutlineIcon />
            </button>
          )}
          <button
            className="playPausebutton"
            onClick={() => {
              nextSong();
            }}
          >
            <SkipNextRoundedIcon />
          </button>
        </div>
        <div className="volume">
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item>
                <VolumeDown className="vloumeDown" />
              </Grid>
              <Grid item xs>
                <Slider
                  value={value}
                  onChange={handleChange}
                  aria-labelledby="continuous-slider"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
