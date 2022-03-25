const isLoggedin = (state = localStorage.getItem("LoggedIn"), action) => {
  switch (action.type) {
    case "ISLOGGEDIN":
      return true;
    case "ISLOGGEDOUT":
      return false;
    default:
      return state;
  }
};
export default isLoggedin;
