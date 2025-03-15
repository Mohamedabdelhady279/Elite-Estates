import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favoritesSlice';
import { productReducer } from "./ProductSlice";
import  UserNameReducer  from "./UserNameSlice";

export let store = configureStore({
    reducer:{
       products: productReducer,
       favorites: favoritesReducer,
       userinfo:UserNameReducer,
    }
})