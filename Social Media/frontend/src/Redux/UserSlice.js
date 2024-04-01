import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
//create a slice i.e. a state which will be changed. state has their own name, initial state and function which change their state
const UserSlice = createSlice({
  name: "user",
  initialState,
  //function which change the state of user
  reducers: {
    //at time of login, user will be changed
    login(state, action) {
      state.user = action.payload;
    },
    //at time of logout, user will be changed
    logout(state, action) {
      state.user = null;
    },
    //at time of update profile,user will be changed
    updateProfile(state, action) {
      state.user = action.payload;
    },
  },
});
export default UserSlice.reducer;
