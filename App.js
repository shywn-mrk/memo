import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import NewMemoScreen from './src/screens/NewMemoScreen/NewMemoScreen'


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    NewMemo: NewMemoScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTintColor: 'white'
    },
    headerLayoutPreset: 'center'
  }

);

export default createAppContainer(AppNavigator);