import {StyleSheet} from 'react-native';
import {COLOR_WHITE, COLOR_TOSCA, COLOR_BLACK} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
  },
  conFlat: {
    marginBottom: 20,
  },
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLOR_TOSCA,
    marginHorizontal: 20,
    marginVertical: 15,
  },
  conRow: {
    flexDirection: 'row',
  },
  mrBot: {
    marginBottom: 10,
  },
  conCol: {
    flexDirection: 'column',
    margin: 1,
  },
  btnPopular: {
    flexDirection: 'row',
    marginVertical: 10,
    width: 185,
    height: 40,
    borderWidth: 1,
    borderColor: COLOR_BLACK,
    alignItems: 'center',
    borderRadius: 100,
  },
  boxFilm: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  film: {
    borderRadius: 10,
    width: 120,
    height: 190,
  },
});

export default styles;
