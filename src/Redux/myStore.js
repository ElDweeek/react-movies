import {  createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import wishListReducer from "./Reducers/WishListReducer";



const myStore = createStore(wishListReducer)


export default myStore