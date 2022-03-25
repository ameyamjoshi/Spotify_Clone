const PlaylistCover = (state = null, action) => {
  switch (action.type) {
    case "PLAYLISTCOVER":
      return action.payload;
    default:
      return state;
  }
};
export default PlaylistCover;
