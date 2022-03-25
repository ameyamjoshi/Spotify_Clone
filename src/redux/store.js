import {createStore} from "redux"
import allreducers from "./reducers";


let store=createStore(allreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store