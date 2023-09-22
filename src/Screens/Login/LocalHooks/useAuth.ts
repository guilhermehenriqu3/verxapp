import React, {useState} from 'react';
import {Keyboard, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import AuthService from '../../../Services/AuthService';
import {setUser} from '../../../Store/Features/User/UserSlice';

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const Login = async (payload: Object) => {
    setLoading(true);
    try {
      const response: User = await AuthService.Login(payload);

      dispatch(setUser(response));
    } catch (error) {
      Keyboard.dismiss();
      ToastAndroid.showWithGravityAndOffset(
        'Erro ao realizar Login',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } finally {
      setLoading(false);
    }
  };

  return {Login, loading};
};

export default useAuth;
