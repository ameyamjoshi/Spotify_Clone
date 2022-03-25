const FeaturedPlaylists = (state = null, action) => {
  switch (action.type) {
    case "FEATUREDPLAYLIST":
      return action.payload;
    default:
      return state;
  }
};
export default FeaturedPlaylists;
