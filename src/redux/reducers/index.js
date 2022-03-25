import { combineReducers } from "redux";
import CurrentSong from "./CurrentSong";
import FeaturedPlalists from "./FeaturedPlaylists";
import isLoggedin from "./isLoggedIn";
import PlaylistCover from "./PlaylistCover";
import Tracks from "./Tracks";
import User from "./User";

let allreducers = combineReducers({
  PlaylistCover: PlaylistCover,
  isLoggedin: isLoggedin,
  User: User,
  FeaturedPlalists: FeaturedPlalists,
  Tracks: Tracks,
  CurrentSong: CurrentSong,
});

export default allreducers;
