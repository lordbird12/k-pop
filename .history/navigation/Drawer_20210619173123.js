/* eslint-disable react-native/sort-styles */
/* eslint-disable import/order */
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigationState } from '@react-navigation/native'
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import Animated from 'react-native-reanimated'
import { Feather, AntDesign } from '@expo/vector-icons'
import { Block, Button, Text } from 'expo-ui-kit'
import { LinearGradient } from 'expo-linear-gradient'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from '../src/screens'

// screens
// import Dashboard from '../screens/Dashboard'
// import Messages from '../screens/Messages'
// import Contact from '../screens/Contact'
import { theme } from '../src/core/theme'
// import { useNavigationState } from '@react-navigation/native'

// const state = useNavigationState((state) => state)
// const routeName = state.routeNames[state.index]

// const history = createBrowserHistory()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const Screens = ({ navigation, style, props, route }) => {
  // console.log(route);
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={18}
                color="black"
                style={{
                  paddingHorizontal: 10,
                
                }}
              />
            </Button>
          ),
        })}
      >
        <Stack.Screen name="StartScreen">
          {(props) => <StartScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="LoginScreen">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="RegisterScreen">
          {(props) => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Dashboard">
          {(props) => <Dashboard {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        {/* <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
        <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
        <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen> */}
      </Stack.Navigator>
    </Animated.View>
  )
}

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  console.log(route)
}

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Block>
        <Block flex={0.4} margin={10} bottom>
          <Image source={require('../assets/icon.png')} style={styles.image} />
          {/* <Image
            source={{
              uri: '../assets/icon.png',
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            style={styles.avatar}
          /> */}
          <Text white title>
            K-Pop Cover Dance
          </Text>
        </Block>
        <Block>
          <DrawerItem
            label="Profile"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <AntDesign name="dashboard" color="white" size={16} />}
          />
          <DrawerItem
            label="Share Me"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Messages')}
            icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <DrawerItem
            label="Contact Us"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            onPress={() => props.navigation.navigate('Contact')}
            style={styles.drawerItem}
            icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
        </Block>
      </Block>

      <Block flex={false}>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: 'white' }}
          icon={() => <AntDesign name="logout" color="white" size={16} />}
          onPress={() => alert('Are your sure to logout?')}
        />
      </Block>
    </DrawerContentScrollView>
  )
}

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0))
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  })

  const animatedStyle = { borderRadius, transform: [{ scale }] }

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#F5D488', '#F5D488']}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={(props) => {
          setProgress(props.progress)
          return <DrawerContent {...props} />
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: {
    // alignItems: 'flex-start',
    // marginVertical: 0,
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
  },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
})
