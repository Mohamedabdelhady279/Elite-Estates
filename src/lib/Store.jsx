import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favoritesSlice';
import { productReducer } from "./ProductSlice";
import  UserNameReducer  from "./UserNameSlice";
import bookingSlice from './BookingSlice';
export let store = configureStore({
    reducer:{
       products: productReducer,
       favorites: favoritesReducer,
       userinfo:UserNameReducer,
       booking:bookingSlice,
    }
})