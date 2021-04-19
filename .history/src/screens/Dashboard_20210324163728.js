import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import GridMenu from '../components/GridMenu'
import { slide as Menu } from 'react-burger-menu'

const Dashboard = ({ navigation }) => (
  <Background>
    <Menu />
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
