const Tracks=(state=null,action)=>{
    switch(action.type){
        case "TRACKS":
            return action.payload;
        default:
            return state;
    }
}
export default Tracks