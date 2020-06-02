import {combineReducers} from 'redux';
import popular from '../screens/Popular/reducer';
import trending from '../screens/Trending/reducer';
import top from '../screens/TopRated/reducer';
import play from '../screens/NowPlaying/reducer';
import airing from '../screens/TvAiring/reducer';
import upcoming from '../screens/Upcoming/reducer';
import ontv from '../screens/OnTV/reducer';
import detail from '../screens/Detail/reducer';

const rootReducer = combineReducers({
  popular,
  trending,
  top,
  play,
  airing,
  upcoming,
  ontv,
  detail,
});

export default rootReducer;
