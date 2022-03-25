import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FeaturedPlaylists, PlaylistCover, User } from "../../redux/actions";
import "./Home.css";
function Home() {
  const dispatch = useDispatch();
  const FeaturedPlaylists1 = useSelector((state) => state.FeaturedPlalists);
  const userDetails = useSelector(state => state.User)
  const getFeaturedPlaylists = async () => {
    axios
      .get("https://api.spotify.com/v1/browse/featured-playlists", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(FeaturedPlaylists(response));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    
      getFeaturedPlaylists();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUser= async ()=>{
    axios.get("https://api.spotify.com/v1/me",{
        headers:{
            Authorization:"Bearer "+ localStorage.getItem("token")
        }
    }).then((response)=>{
        // console.log(response)
        dispatch(User(response))
    }).catch((err)=>{
        console.log(err)
    })
}
useEffect(() => {
    if(userDetails==null){
        getUser()
}
    //dispatch(User("Ameya"))
     // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  let time = new Date().getHours();
  var greeting;
  if (time > 0 && time < 12) {
    greeting = "Morning";
  } else if (time > 12 && time < 17) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }
  return (
    <div className='homeContainer'>
      <div className='top'>
        <span>Good {greeting}!</span>
        <NavLink  to={`/profile`}>
        <img  src={userDetails&&userDetails.data.images[0].url} alt='Profile Pic' className='profilePic' />
        </NavLink>
      </div>
      <div className='featuredPlaylists'>
        Featured Playlists
        
        <span><NavLink exact to={'/featuredPlaylists'}>See more...</NavLink></span>
        
        <div className="playlist">
            
        {FeaturedPlaylists1&&FeaturedPlaylists1.data &&
          FeaturedPlaylists1.data.playlists.items.slice(0, 4).map((item, index)  => {
           
            return(
              <NavLink  to={`/album/id:${item.id}`}>
                <div className='card' onClick={()=>{
                             dispatch(PlaylistCover(item.images[0].url))
                        }}>
                    <div className='img'>
                      <img
                        src={item.images[0].url}
                        alt='Song Cover'
                        className='songImage'
                      />
                    </div>
                    <span className='playlistName'>{item.name.split(' ').slice(0,2).join(' ')}</span>
                    {/* <span className='desc'> {item.description.split(' ').slice(0,2).join(' ')||item.description.split('<').slice(0,2).join(' ')}...</span> */}
                  </div>
                  </NavLink>)
          })}


          </div>
          <div className="weekTop">
              Top this week
              <span><NavLink exact to={'/featuredPlaylists'}>See more...</NavLink></span>
              <div className="playlist">
              {FeaturedPlaylists1&&FeaturedPlaylists1.data &&
          FeaturedPlaylists1.data.playlists.items.slice(4, 8).map((item, index)  => {
           
            return(
              <NavLink  to={`/album/id:${item.id}`}>
                <div className='card' onClick={()=>{
                           dispatch(PlaylistCover(item.images[0].url))
                        }}>
                    <div className='img'>
                      <img
                        src={item.images[0].url}
                        alt='Song Cover'
                        className='songImage'
                      />
                    </div>
                    <span className='playlistName'>{item.name.split(' ').slice(0,2).join(' ')}</span>
                    {/* <span className='desc'> {item.description.split(' ').slice(0,2).join(' ')||item.description.split('<').slice(0,2).join(' ')}...</span> */}
                  </div>
                  </NavLink>  )
          })}
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
