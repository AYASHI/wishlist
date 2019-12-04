import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Screens/Home';
import DetailsScreen from '../Screens/Details';

const HomeNavigator =  createStackNavigator({
    Root: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            title: 'Details'
        }
    }
})

export default HomeNavigator;

