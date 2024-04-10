import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
};
const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPost(state, action) {
      state.post = action.payload;
    },
  },
});
export const { setPost } = PostSlice.actions;
export default PostSlice.reducer;
