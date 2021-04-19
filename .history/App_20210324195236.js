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
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
