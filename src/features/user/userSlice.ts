import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setCredentials, setToken } = userSlice.actions;

export default userSlice.reducer;
