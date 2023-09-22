import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface IButton {
  title?: string;
  onPress: () => void;
  testID?: any;
}

const Button = ({title, onPress, testID, ...props}: IButton) => {
  return (
    <>
      <Pressable
        testID={testID}
        {...props}
        onPress={onPress}
        style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
    </>
  );
};

export default Button;
