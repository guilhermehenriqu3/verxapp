import React from 'react';
import {Image, Text, View} from 'react-native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Images from '../../Constants/Images';
import styles from './styles';
const Login = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Images.logo} />

      <Text style={styles.subtitle}>Prossiga com sua conta</Text>
      <Input title="Usuario" placeholder="usuario teste" />
      <Input title="Password" secureTextEntry placeholder="****" />

      <Button title="LOGIN" onPress={() => {}} />
    </View>
  );
};

export default Login;
