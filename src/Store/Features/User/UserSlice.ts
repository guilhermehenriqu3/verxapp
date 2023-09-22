import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState: {},
  reducers: {
    cleanUser: state => {
      return {};
    },
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const {setUser, cleanUser} = UserSlice.actions;

export default UserSlice.reducer;
