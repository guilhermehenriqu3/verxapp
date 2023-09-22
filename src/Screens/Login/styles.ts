import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  margin: {marginTop: 20},
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40,
  },
  logo: {height: 150, alignSelf: 'center'},
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
});

export default styles;
