import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

const Stack = createNativeStackNavigator();

import Login from '../Screens/Login';
const PrivateStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default PrivateStacks;
