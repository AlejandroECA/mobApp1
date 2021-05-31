import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Pages/HomeScreen';
import ComponentsScreen from './Pages/ComponentSreen';
import ListScreen from './Pages/ListComponent';
import ImageScreen from './Pages/ImageScreen'
import CounterScreen from './Pages/CounterScreen'
import ColorScreen from './Pages/ColorScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImgScreen : ImageScreen,
    Counter : CounterScreen,
    ColorScreen: ColorScreen

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);