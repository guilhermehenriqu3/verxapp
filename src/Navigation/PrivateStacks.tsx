import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

const Stack = createNativeStackNavigator();

import Home from '../Screens/Home';
const PrivateStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default PrivateStacks;
