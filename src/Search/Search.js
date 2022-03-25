import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
import SongBar from '../Album/SongBar/SongBar'
import { PlaylistCover } from '../redux/actions'
// import { Tracks } from '../redux/actions'


import "./Search.css"
function Search() {
    const [SearchItem, setSearchItem] = useState()
    const [results, setresults] = useState()
    const [resultsPlaylist, setresultsPlaylist] = useState()
    const [trackFilter, settrackFilter] = useState(true)
    const [playlistFilter, setplaylistFilter] = useState(true)
    const dispatch = useDispatch()
    
    // const dispatch = useDispatch()
    
    const handleChange=(e)=>{
        setSearchItem(e.target.value)
        console.log(SearchItem)
    }
    const SearchPlaylists = () =>{
       


        let url1="https://api.spotify.com/v1/search"
        if (SearchItem&&SearchItem.length>0){
            url1 += `?q=${SearchItem}&type=playlist`
        }
        axios.get(url1, {
            headers:{
                'Authorization' : 'Bearer ' + localStorage.getItem("token")
            }
        }).then((response)=>{
            console.log(response.data)
            setresultsPlaylist(response.data)
            // dispatch(Tracks({type:"searchPage",content:response.data}));
        }).catch((err)=>{
            console.log(err)
        })
    }
const SearchTracks=()=>{
    let url = 	'https://api.spotify.com/v1/search'
    if (SearchItem&&SearchItem.length>0){
        url += `?q=${SearchItem}&type=track`
    }
    axios.get(url, {
        headers:{
            'Authorization' : 'Bearer ' + localStorage.getItem("token")
        }
    }).then((response)=>{
        console.log(response.data)
        setresults(response.data)
        // dispatch(Tracks({type:"searchPage",content:response.data}));
    }).catch((err)=>{
        console.log(err)
    })
}

    useEffect(() => {
        console.log("Changed")
        SearchTracks()
        SearchPlaylists()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SearchItem])
    return (
        <div className="searchContainer">
            <div className="searchBar">
                <input placeholder="Search for songs" value={SearchItem} onChange={handleChange}></input>
                <button className="Filter" onClick={()=>{
                    settrackFilter(!trackFilter)
                }}>
                    {trackFilter?<span>Hide Tracks</span>:<span>Show tracks</span>}</button>
                    <button className="Filter" onClick={()=>{
                    setplaylistFilter(!playlistFilter)
                }}>{playlistFilter?<span>Hide Playlists</span>:<span>Show Playlist</span>}</button>
            </div>
            {trackFilter?
            <div className="resultContainer" style={{height: "35vh" ,overflow:"scroll"  }}>
                
            {results&&results.tracks.items.map((item,index)=>{
                return(
               <SongBar name={item.name} imgurl={item.album.images[0]} url={item.preview_url} id={item.id} time={item.duration_ms} key={index} />
               )})}

               
            </div>
            :
            <div></div>
            }
            {playlistFilter?<div className="playlistContainer">
               {
                   resultsPlaylist&&resultsPlaylist.playlists.items.map((item,index)=>{
                   
                       return(
                        <NavLink to={`/album/id:${item.id}`}>
                        <div className='card' onClick={()=>{
                            dispatch(PlaylistCover(item.images[0].url))
                        }}>
                        <div className='img'>
                          <img
                            src={item.images[0]&&item.images[0].url}
                            alt='Song Cover'
                            className='songImage'
                          />
                        </div>
                        <span className='playlistName'>{item.name.split(' ').slice(0,2).join(' ')}</span>
                        {/* <span className='desc'> {item.description.split(' ').slice(0,2).join(' ')||item.description.split('<').slice(0,2).join(' ')}...</span> */}
                      </div> 
                      </NavLink>      )
                })
             }
               </div>
               :
               <div>{
                  
                   }</div>}
            
        </div>
    )
}

export default Search
