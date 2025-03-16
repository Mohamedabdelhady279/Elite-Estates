import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userinfo:null,
};

const UserNameSlice = createSlice({
  name: 'userinfo',
  initialState,
  reducers: {
    setuser:(state,action)=>{
        state.userinfo=action.payload
    },

    logout:(state) =>{ 
        state.userinfo=null

    },

  },
});

export const { setuser,logout } = UserNameSlice.actions;
export default UserNameSlice.reducer;
