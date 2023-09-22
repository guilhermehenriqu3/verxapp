import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface IUserData {
  title?: string;
  data: Object | any;
  testID: string;
}

const UserData = ({title, data, testID}: IUserData) => {
  return (
    <>
      <View testID={testID} style={styles.container}>
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
