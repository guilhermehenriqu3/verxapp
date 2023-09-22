import React, {useCallback, useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Images from '../../Constants/Images';
import useAuth from './LocalHooks/useAuth';
import styles from './styles';
const Login = () => {
  const {Login, loading} = useAuth();
  const [login, setLogin] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');

  const handleLogin = useCallback(() => {
    Login({
      username: login,
      password: password,
    });
  }, [Login, login, password]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={Images.logo} />

      <Text style={styles.subtitle}>Prossiga com sua conta</Text>
      <Input
        testID="username"
        onChangeText={setLogin}
        value={login}
        title="Usuario"
        placeholder="usuario teste"
      />
      <Input
        testID="Password"
        onChangeText={setPassword}
        value={password}
        title="Password"
        secureTextEntry
        placeholder="****"
      />

      <Button testID="submit" title="LOGIN" onPress={handleLogin} />

      {loading && <ActivityIndicator size="large" style={styles.margin} />}
    </View>
  );
};

export default Login;
