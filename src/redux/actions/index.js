const isLoggedin = () => {
  return {
    type: "ISLOGGEDIN",
  };
};
const isLoggedout = () => {
  return {
    type: "ISLOGGEDOUT",
  };
};
const User = (details) => {
  return {
    type: "USER",
    payload: details,
  };
};
const FeaturedPlaylists = (playlist) => {
  return {
    type: "FEATUREDPLAYLIST",
    payload: playlist,
  };
};
const Tracks = (songs) => {
  return {
    type: "TRACKS",
    payload: songs,
  };
};
const CurrentSong = (song) => {
  return {
    type: "CURRENTSONG",
    payload: song,
  };
};
const PlaylistCover = (imgurl) => {
  return {
    type: "PLAYLISTCOVER",
    payload: imgurl,
  };
};
export {
  isLoggedin,
  isLoggedout,
  User,
  FeaturedPlaylists,
  Tracks,
  CurrentSong,
  PlaylistCover,
};
