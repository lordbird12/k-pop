import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import GridMenu from '../components/GridMenu'
import { slide as Menu } from 'react-burger-menu'

const Dashboard = ({ navigation }) => (
  <Background>
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
      <a onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
    <Logo />
    <Header>หน้าเมนูหลัก</Header>
    <GridMenu></GridMenu>
    <Paragraph></Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      ออกจากระบบ
    </Button>
  </Background>
)

export default Dashboard
