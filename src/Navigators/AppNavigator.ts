import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import LoginScreen from '../Screens/Login';
import HomeNavigator from './HomeNavigator';
const AppNavigator = createSwitchNavigator({
     Login: LoginScreen,
     Home: HomeNavigator
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;