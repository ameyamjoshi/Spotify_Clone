const CurrentSong=(state=null,action)=>{
    switch(action.type){
        case "CURRENTSONG":
            return action.payload;
        default:
            return state;
    }
}
export default CurrentSong