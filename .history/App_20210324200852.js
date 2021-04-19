import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createDrawerNavigator } from '@react-navigation/drawer'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './src/screens'

// import { slide as Menu } from 'react-burger-menu'
// import SideMenu from 'react-native-side-menu'
import Icon from 'react-native-vector-icons/EvilIcons'
import Drawer from '../navigation/Drawer'
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()
// const MaterialTopTabs = createMaterialTopTabNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const BottomTabs = createBottomTabNavigator();

const App = () => {
  return (
    // const menu = <Menu navigator={navigator}/>;
    <Provider theme={theme}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  )
}

export default App
