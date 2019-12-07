import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from '../Screens/Login';
import HomeNavigator, {LoginNavigator} from './HomeNavigator';
import SplashScreen from '../Screens/Splash';
import ListScreen from '../Screens/Share';
const AppNavigator = createSwitchNavigator({
     Splash:SplashScreen,
     Login: LoginNavigator,
     Home: HomeNavigator,
     Share: {
          screen: ListScreen,
          path:'share/:userid'
     }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;