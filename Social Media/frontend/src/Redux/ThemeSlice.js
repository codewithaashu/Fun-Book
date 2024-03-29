import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "dark",
};
const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    },
  },
});
export default ThemeSlice;
