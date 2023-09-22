import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../Components/Button';
import UserData from '../../Components/UserData';
import Images from '../../Constants/Images';
import {cleanUser} from '../../Store/Features/User/UserSlice';
import useUserData from './LocalHooks/useUserData';
import {userData} from '../../Types/userDataType';

import styles from './styles';
const Login = () => {
  const [userData, setUserData] = useState<userData>();
  const dispatch = useDispatch();
  const {fetchUserData, loading} = useUserData();

  const getData = async () => {
    const response = await fetchUserData();
    setUserData(() => response);
  };
  useEffect(() => {
    getData();
  }, []);

  const deslogar = useCallback(() => {
    dispatch(cleanUser());
  }, [dispatch, cleanUser]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text testID="header" style={styles.headerText}>
          HOME
        </Text>
        <Pressable onPress={deslogar} style={styles.logoButton}>
          <Image
            testID="logo"
            style={{height: 20}}
            resizeMode="contain"
            source={Images.logo}
          />
        </Pressable>
      </View>

      {loading && (
        <ActivityIndicator
          testID="loading"
          size="large"
          style={styles.margin}
        />
      )}

      {userData && !loading && (
        <>
          <View style={styles.spacer} />
          <View style={styles.pictureContainer}>
            <View style={styles.whitePictureContainer}>
              <Image
                testID="testPicture"
                style={styles.pictureSize}
                resizeMode="contain"
                source={{uri: userData?.image}}
              />
            </View>
          </View>
        </>
      )}

      <ScrollView
        contentContainerStyle={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        {/* aqui começa o conteúdo texto. daria pra fazer um object.keys listando tudo. mas alguns dados vindo não me parecem legais pra mostrar.*/}
        {userData && !loading && (
          <>
            <UserData
              testID="userDataTest"
              data={{
                firstName: userData.firstName,
                age: userData.age,
                gender: userData.gender,
                email: userData.email,
              }}
              title="Dados Pessoais"
            />

            <UserData
              testID="userDataTest"
              data={{
                address: userData.address.address,
                city: userData.address.city,
                postalCode: userData.address.postalCode,
                state: userData.address.state,
              }}
              title="Endereço"
            />
          </>
        )}
      </ScrollView>
      <Button testID={'leaveButton'} title="Deslogar" onPress={deslogar} />
    </View>
  );
};

export default Login;
