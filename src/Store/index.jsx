import { ApiFetchSlice, addToProfileSlice, missionSlice } from "./Slices/ApiFetchSlice";
import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
    reducer:{
        ApiSlice : ApiFetchSlice.reducer,
        missionSlice :missionSlice.reducer,
        Profile: addToProfileSlice.reducer
    }
})

export default store;