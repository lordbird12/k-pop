import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

const AboutScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>หน้าเมนูหลัก</Header>
    <Paragraph>
      
    </Paragraph>
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

export default AboutScreen
