
import React from 'react'
import {  useSelector } from 'react-redux'

import "./Profile.css"

function Profile() {
    // const dispatch = useDispatch()
    const userDetails = useSelector(state => state.User)
    // console.log(userDetails.data)
    
    
    return (
        <div className="profileContainer">
           <h2 className="heading">Profile</h2>
           <div className="content">
               <div className="image">
                   <img src={userDetails&&userDetails.data.images[0].url} alt="Profile" width="150px" height="150px"/>
               </div>
               <div className="text">
                   <div className="name">
                    {userDetails&&userDetails.data.display_name}                      
                   </div>
                   <div className="email"> {userDetails&&userDetails.data.email}      </div>
                   <div className="openSpotify">
                       <a href={userDetails&&userDetails.data.external_urls.spotify}><button className="loginButton">Open in spotify</button></a>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Profile
