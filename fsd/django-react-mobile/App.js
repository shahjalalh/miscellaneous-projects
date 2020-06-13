import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import AuthScreen from "./src/screens/AuthScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      title: "Movie Rater"
    }
  }
);

export default createAppContainer(navigator);
