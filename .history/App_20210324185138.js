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
import SideMenu from 'react-native-side-menu'

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


class MainActivity extends Component {
  constructor(props) {
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ])
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> This is Activity - 1 </Text>
      </View>
    )
  }
}

class SecondActivity extends Component {
  constructor(props) {
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ])
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> This is Activity - 2 </Text>
      </View>
    )
  }
}

class ThirdActivity extends Component {
  constructor(props) {
    super(props)

    YellowBox.ignoreWarnings([
      'Warning: componentWillMount is deprecated',
      'Warning: componentWillReceiveProps is deprecated',
    ])
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> This is Activity - 3 </Text>
      </View>
    )
  }
}

const FirstActivity_StackNavigator = StackNavigator({
  First: {
    screen: MainActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'MainActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
})

const SecondActivity_StackNavigator = StackNavigator({
  Second: {
    screen: SecondActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'SecondActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
})

const ThirdActivity_StackNavigator = StackNavigator({
  Third: {
    screen: ThirdActivity,
    navigationOptions: ({ navigation }) => ({
      title: 'ThirdActivity',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
})

export default MyDrawerNavigator = DrawerNavigator({
  MainStack: {
    screen: FirstActivity_StackNavigator,
  },

  SecondStack: {
    screen: SecondActivity_StackNavigator,
  },

  ThirdStack: {
    screen: ThirdActivity_StackNavigator,
  },
})
