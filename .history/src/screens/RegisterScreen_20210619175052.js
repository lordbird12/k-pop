import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { lnameValidator } from '../helpers/lnameValidator'
import APIKit, { setClientToken } from '../shared/APIKit'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [lname, setLname] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const lnameError = lnameValidator(lname.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setLname({ ...lname, error: lnameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    } else {
      const payload = { first_name: first_name.value, lastName: lastName.value, email: email.value, password: password.value }
      const onSuccess = ({ data }) => {
        // Set JSON Web Token on success
        setClientToken(data.token)
        // this.setState({ isLoading: false, isAuthorized: true })

        navigation.reset({
          index: 0,
          routes: [{ name: 'Dashboard' }],
        })
      }

      const onFailure = (error) => {
        console.log(error && error.response)
        // this.setState({ errors: error.response.data, isLoading: false })
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>สร้างบัญชีใหม่</Header>
      <TextInput
        label="ชื่อ"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="นามสกุล"
        returnKeyType="next"
        value={lname.value}
        onChangeText={(text) => setLname({ value: text, error: '' })}
        error={!!lname.error}
        errorText={lname.error}
      />
      <TextInput
        label="อีเมล"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="รหัสผ่าน"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="outlined"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        ลงทะเบียน
      </Button>
      <View style={styles.row}>
        <Text>มีบัญชีอยู่แล้ว ? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default RegisterScreen
