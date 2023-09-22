import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface IUserData {
  title?: string;
  data: Object | any;
}

const UserData = ({title, data}: IUserData) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.whiteContainer}>
          <Text style={styles.title}>{title}</Text>

          {Object.keys(data)?.map((item: string) => (
            <View key={Date.now() * Math.random()} style={styles.dataContainer}>
              <Text>{item}</Text>
              <Text style={styles.fw}>{data[item]}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default UserData;
