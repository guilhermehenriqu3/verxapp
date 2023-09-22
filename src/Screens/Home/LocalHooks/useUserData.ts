import {useState} from 'react';
import {Keyboard, ToastAndroid} from 'react-native';
import {useSelector} from 'react-redux';
import UserService from '../../../Services/UserService';

const useUserData = () => {
  const [loading, setLoading] = useState(false);
  const {id} = useSelector((state: Object) => state.userReducer);
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await UserService.GetUserData(id);
      return response;
    } catch (error) {
      Keyboard.dismiss();
      ToastAndroid.showWithGravityAndOffset(
        'Erro ao buscar dados do usuário',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } finally {
      setLoading(false);
    }
  };

  return {fetchUserData, loading};
};

export default useUserData;
