import React from 'react'
import { Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { OffCanvas3D } from 'react-native-off-canvas-menu'

const MenuBurger = () => (
  <View style={{ flex: 1 }}>
    <OffCanvas3D
      // active={this.state.menuOpen}
      // onMenuPress={this.handleMenu.bind(this)}
      backgroundColor={'#222222'}
      menuTextStyles={{ color: 'white' }}
      handleBackPress={true}
      menuItems={[
        {
          title: 'Menu 1',
          icon: <Icon name="camera" size={35} color="#ffffff" />,
          renderScene: <MyScene />,
        },
        {
          title: 'Menu 2',
          icon: <Icon name="bell" size={35} color="#ffffff" />,
          renderScene: <AnotherScene />,
        },
      ]}
    />
  </View>
)

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

export default MenuBurger
