import {StyleSheet} from 'react-native';
import {COLOR_HEADER, COLOR_LIGHT_BLACK, COLOR_BLACK} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_LIGHT_BLACK,
  },
  conLogo: {
    width: '100%',
    height: 60,
    backgroundColor: COLOR_BLACK,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  imgLogo: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
