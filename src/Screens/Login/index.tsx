import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Images from '../../Constants/Images';
import {cleanUser, setUser} from '../../Store/Features/User/UserSlice';
import styles from './styles';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const userdatar = useSelector(state => state);
  const dispatch = useDispatch();

  const ReduxTest = () => {
    dispatch(setUser({token: '123123'}));
  };

  const deslogar = () => {
    dispatch(cleanUser());
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Images.logo} />

      <Text style={styles.subtitle}>Prossiga com sua conta</Text>
      <Input title="Usuario" placeholder="usuario teste" />
      <Input title="Password" secureTextEntry placeholder="****" />

      <Button
        title="LOGIN"
        onPress={() => {
          ReduxTest();
        }}
      />

      {loading && <ActivityIndicator size="large" style={styles.margin} />}
    </View>
  );
};

export default Login;
