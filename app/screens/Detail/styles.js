import {StyleSheet} from 'react-native';
import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_LIGHT_BLACK,
} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: 330,
  },
  backgroundHeader: {
    backgroundColor: COLOR_BLACK,
    opacity: 0.5,
    height: 350,
  },
  stickySection: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 60,
  },
  conRow: {
    flexDirection: 'row',
  },
  txtTitle: {
    color: COLOR_WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imgBack: {
    width: window.width,
    height: 350,
  },
  avatar: {
    width: 120,
    height: 160,
  },
  txtInfo: {
    color: COLOR_WHITE,
    fontSize: 15,
    paddingVertical: 3,
  },
  txtOverview: {
    color: COLOR_WHITE,
    fontSize: 15,
    paddingVertical: 3,
    textAlign: 'justify',
  },
  parallaxHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    bottom: 20,
    left: 20,
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  conTxtHead: {
    marginLeft: 20,
    flexDirection: 'column',
  },
  conYtb: {
    padding: 10,
    width: 375,
    color: COLOR_WHITE,
  },
  conBtnVideo: {
    marginHorizontal: 10,
    backgroundColor: COLOR_ORANGE,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  conBtnReviewHalf: {
    marginHorizontal: 10,
    width: 300,
    height: 300,
    backgroundColor: COLOR_BLACK,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  conLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  conBtnReview: {
    marginHorizontal: 10,
    width: 300,
    backgroundColor: COLOR_BLACK,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  headReview: {
    flexDirection: 'row',
    height: 30,
    width: '100%',
    borderBottomColor: COLOR_LIGHT_BLACK,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
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
