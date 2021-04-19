import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { OffCanvas3D } from 'react-native-off-canvas-menu'

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
