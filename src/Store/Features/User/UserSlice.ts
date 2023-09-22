import {createSlice} from '@reduxjs/toolkit';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export const UserSlice = createSlice({
  name: 'userSlice',
  initialState: {},
  reducers: {
    cleanUser: state => {
      return {};
    },
    setUser: (state, action) => {
      let data: User = action.payload;
      return data;
    },
  },
});

export const {setUser, cleanUser} = UserSlice.actions;

export default UserSlice.reducer;
