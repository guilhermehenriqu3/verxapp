import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  fw: {fontWeight: 'bold'},
  dataContainer: {marginBottom: 20, marginLeft: 16},
  container: {flex: 1, backgroundColor: Colors.gray[0], marginBottom: 20},
  title: {alignSelf: 'center', fontWeight: 'bold'},
  whiteContainer: {
    marginHorizontal: 16,
    borderRadius: 15,
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: Colors.white,
  },
});

export default styles;
