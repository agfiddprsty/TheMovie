import {createStackNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Youtube from '../screens/Youtube';

export const HomeStack = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
    Youtube: Youtube,
  },
  {headerMode: 'none', navigaitonOptions: {tabBarVisible: true}},
);
