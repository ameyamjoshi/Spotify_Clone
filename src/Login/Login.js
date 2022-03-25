import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLoggedin, isLoggedout } from "../redux/actions";
import "./Login.css";
function Login() {
  const dispatch = useDispatch();

  const URL = `https://accounts.spotify.com/authorize?client_id=63d97d491f3c40f4a6f993db35eb8465&response_type=code&redirect_uri=${window.location.href}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

  const windowLoc = window.location.href;
  const getAccessToken = (body) => {
    let url = "https://accounts.spotify.com/api/token";
    let cid = "CLIENT_ID";
    let csc = "CLIENT_SECRET";

    axios
      .post(url, body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(cid + ":" + csc),
        },
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.access_token);
        // localStorage.setItem("LoggedIn",true)
        dispatch(isLoggedin());
      })
      .catch(function (error) {
        console.log(error.response);
        window.location = "/";
      });
  };
  const getToken = (code, windowLoc) => {
    let postBody =
      "grant_type=authorization_code&code=" +
      code +
      "&redirect_uri=" +
      windowLoc +
      "&client_id=CLIENT_ID&client_secret=CLIENT_SECRET";

    getAccessToken(postBody);
    console.log(postBody);
  };

  const getCode = () => {
    let code = null;
    const queryString = window.location.search;
    console.log(queryString);
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get("code");
    }
    return code;
  };
  const handleRedirect = (windowLoc) => {
    let code = getCode();
    console.log(code);
    getToken(code, windowLoc);
    window.history.pushState("", "", windowLoc);
  };
  console.log(windowLoc);
  const onPageLoad = () => {
    let token = localStorage.getItem("token");

    if (token !== null) {
      dispatch(isLoggedin());
    } else {
      dispatch(isLoggedout());
    }

    const windowLocation = window.location.href;

    if (window.location.search.length > 0) {
      handleRedirect(windowLocation.split("?")[0]);
    }
  };
  useEffect(() => {
    onPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loginContainer">
      <div className="loginContent">
        <div className="logo">
          <img
            src="spotify_logo.png"
            alt="spotify logo"
            className="logo_image"
          />
        </div>
        <div>
          <a href={URL}>
            <button
              className="loginButton"
              onClick={() => {
                //   dispatch(isLoggedin())
              }}
            >
              Login With spotify
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
