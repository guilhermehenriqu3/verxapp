import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './Features/User/UserSlice';

export const store = configureStore({
  reducer: {
    userReducer: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
