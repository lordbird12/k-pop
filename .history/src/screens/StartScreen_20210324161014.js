import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'


const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>K-Pop Cover Dance </Header>
    {/* <Paragraph>
      COVER DANCE เป็นการนำเพลงและการเต้นต้นฉบับของศิลปินที่เราชื่นชอบมาทำซ้ำ
      ดัดแปลงหรือลอกมาทั้งหมดเลยถือว่าเป็นศาสตร์แขนงหนึ่งของการเต้น
    </Paragraph> */}
    <Button mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
      เข้าสู่ระบบ
    </Button>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      ลงทะเบียนใหม่
    </Button>
  </Background>
)

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    color: theme.colors.buttonText,
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export default StartScreen
