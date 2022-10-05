import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "찬찬",
    email: "lsc@gmail.com",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
    //{} state값이 empty String으로 바뀜

    addHello: (state, action) => {
      state.name = "Hello" + action.payload.name;
    },
  },
});

export const { update, remove, addHello } = userSlice.actions;
export default userSlice.reducer;
