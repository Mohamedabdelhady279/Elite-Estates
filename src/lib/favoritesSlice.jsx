import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
 
      if (!state.favorites.some(item => item === action.payload)) {
        state.favorites.push(action.payload);
      }
    },
  
  },
});

export const { addFavorite  } = favoritesSlice.actions;
export default favoritesSlice.reducer;
