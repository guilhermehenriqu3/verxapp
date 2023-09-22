import React from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import Colors from '../../Constants/Colors';
import Images from '../../Constants/Images';
const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        justifyContent: 'center',
      }}>
      <Image
        style={{height: 150, alignSelf: 'center'}}
        resizeMode="contain"
        source={Images.logo}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          alignSelf: 'center',
          marginBottom: 40,
        }}>
        Prossiga com sua conta
      </Text>

      <Text>Username</Text>
      <View style={{marginHorizontal: 10}}>
        <TextInput
          placeholder="Usuario teste"
          style={{borderBottomWidth: 1, marginBottom: 40}}
        />
      </View>
      <Text>Password</Text>
      <View style={{marginHorizontal: 10}}>
        <TextInput
          secureTextEntry
          placeholder="*****"
          style={{borderBottomWidth: 1, marginBottom: 40}}
        />
      </View>

      <Pressable
        style={{
          height: 50,
          width: '100%',
          backgroundColor: Colors.blue[1],
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Colors.white, fontWeight: 'bold'}}>LOGIN</Text>
      </Pressable>
    </View>
  );
};

export default Login;
