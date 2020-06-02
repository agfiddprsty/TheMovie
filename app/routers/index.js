import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {HomeStack} from './stackNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeStack,
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
