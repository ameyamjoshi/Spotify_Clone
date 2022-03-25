import React from "react";
// import Login from '../auth/Login/Login';

import { useSelector } from "react-redux";
import Login from "./Login/Login";
import Main from "./Main/Main";
// import Main from '../main/Main/Main';

const MainNav = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedin);

  if (isLoggedIn) {
    return (
      <div>
        <Main />
      </div>
    );
  } else {
    return (
      <div>
        <Login />{" "}
      </div>
    );
  }
};

export default MainNav;
