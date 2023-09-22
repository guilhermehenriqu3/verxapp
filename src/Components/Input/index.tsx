import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './styles';

interface IINPUT extends TextInputProps {
  title?: string;
}

const Input = ({title, onChangeText, value, placeholder, ...props}: IINPUT) => {
  return (
    <>
      {title && <Text>{title}</Text>}

      <View style={styles.container}>
        <TextInput
          {...props}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </View>
    </>
  );
};

export default Input;
