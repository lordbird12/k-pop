import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'

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
      style={styles.buttonT}
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      ลงทะเบียนใหม่
    </Button>
  </Background>
)

const styles = StyleSheet.create({
  buttonT: {
    color: '#000000',
    backgroundColor: '#fffffff',
  },
})

export default StartScreen
