import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  buttonTitle: {color: Colors.white, fontWeight: 'bold'},
  button: {
    height: 50,
    width: '100%',
    backgroundColor: Colors.blue[1],
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
