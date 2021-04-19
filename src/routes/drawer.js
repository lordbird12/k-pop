import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import Dashboard from '../screens/Dashboard'
import AboutScreen from '../screens/AboutScreen'
import ProfileScreen from '../screens/ProfileScreen'

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Dashboard,
  },
  about: {
    screen: AboutScreen,
  },
  profile: {
    screen: ProfileScreen,
  },
})

export default createAppContainer(RootDrawerNavigator)
