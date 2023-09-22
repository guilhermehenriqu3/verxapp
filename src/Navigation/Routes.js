import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useSelector} from 'react-redux';

import PrivateStacks from './PrivateStacks';
import PublicStacks from './PublicStacks';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const user = useSelector(state => state.userReducer.token);
  const isLogged = !!user;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogged ? (
          <Stack.Screen
            name="PublicStacks"
            component={PublicStacks}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="PrivateStacks"
            component={PrivateStacks}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
