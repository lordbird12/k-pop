import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

const Header = (props) => <Text style={styles.header} {...props} />

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.button,
    fontWeight: 'bold',
    borderColor: '#ff0000',
    borderTopColor: '#ff0000',
    paddingVertical: 12,
  },
})

export default Header
