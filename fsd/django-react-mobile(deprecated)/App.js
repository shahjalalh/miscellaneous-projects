import React from 'react';
import Auth from './components/Auth';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Auth: {screen: Auth},
});

const App = createAppContainer(AppNavigator);

export default App;
