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
    <Button style={styles.button} labelStyle={styles.text} mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
      เข้าสู่ระบบ
    </Button>
    <Button
      style={styles.button}
      onPress={() => navigation.navigate('RegisterScreen')}
      labelStyle={styles.text}
    >
      ลงทะเบียนใหม่ๅ
    </Button>
  </Background>
)

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export default StartScreen
