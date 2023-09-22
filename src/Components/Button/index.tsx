import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface IButton {
  title?: string;
  onPress: () => void;
}

const Button = ({title, onPress}: IButton) => {
  return (
    <>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </Pressable>
    </>
  );
};

export default Button;
