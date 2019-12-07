/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import AppContainer from './src/Navigators/AppNavigator';
import NavigatorService from './src/Navigators/NavigationService'

const App = () => {
  const [navigator, setNavigator] = useState({});
  
  useEffect(() => {
    if (navigator) {
        NavigatorService.setNavigator(navigator);
    }
  }, [navigator])
  console.disableYellowBox = true
  return (
    <AppContainer
    ref={nav => {
      setNavigator(nav!);
    }}
    />
  );
};

export default App;
