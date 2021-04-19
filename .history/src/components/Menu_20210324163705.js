import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Menu = () => (
  <Menu>
    <a id="home" className="menu-item" href="/">
      Home
    </a>
    <a id="about" className="menu-item" href="/about">
      About
    </a>
    <a id="contact" className="menu-item" href="/contact">
      Contact
    </a>
    <a className="menu-item--small" href="">
      Settings
    </a>
  </Menu>
)

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})

export default Menu
