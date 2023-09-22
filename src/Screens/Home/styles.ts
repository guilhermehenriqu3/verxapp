import {StyleSheet} from 'react-native';
import Colors from '../../Constants/Colors';

const styles = StyleSheet.create({
  margin: {marginTop: 20},
  pictureSize: {height: 50, width: 50},
  whitePictureContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {flexGrow: 1, backgroundColor: Colors.gray[0]},
  pictureContainer: {
    height: 140,
    width: '100%',
    backgroundColor: Colors.blue[1],
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    height: 20,
    width: '100%',
    backgroundColor: Colors.gray[0],
  },
  headerText: {color: Colors.white, fontWeight: 'bold'},
  logoButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: Colors.blue[1],
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default styles;
