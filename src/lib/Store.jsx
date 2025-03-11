import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favoritesSlice';
import { productReducer } from "./ProductSlice";

export let store = configureStore({
    reducer:{
       products: productReducer,
       favorites: favoritesReducer,
    }
})