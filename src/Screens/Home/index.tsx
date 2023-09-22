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
  const dispatch = useDispatch();
  const deslogar = () => {
    dispatch(cleanUser());
  };

  return (
    <View style={styles.container}>
      <Text onPress={() => deslogar()}>HOME</Text>
    </View>
  );
};

export default Login;
