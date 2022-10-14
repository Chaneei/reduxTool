import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//try catch 문을 자동으로 해주는 Thunk 사용
export const updateUser2 = createAsyncThunk("user/update", async (user) => {
  const res = await axios.post(
    "http://localhost:5000/api/users/1/update",
    user
  );
  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: { name: "찬찬", email: "lsc@gmail.com" },
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
  // updateStart: (state) => {
  //   state.pending = true;
  // },
  // updateSuccess: (state, action) => {
  //   state.pending = false;
  //   state.userInfo = action.payload;
  // },
  // updateError: (state) => {
  //   state.error = true;
  //   state.pending = false;
  // },
});

export const { updateError, updateStart, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
