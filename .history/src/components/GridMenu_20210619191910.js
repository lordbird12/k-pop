import React from 'react'
import { Platform, StyleSheet, FlatList, Text, View, Alert } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { FlatGrid } from 'react-native-super-grid'
import { theme } from '../core/theme'

// this.state = {
//   GridListItems: [
//     { key: 'Skptricks' },
//     { key: 'Sumit' },
//     { key: 'Amit' },
//     { key: 'React' },
//     { key: 'React Native' },
//     { key: 'Java' },
//     { key: 'Javascript' },
//     { key: 'PHP' },
//     { key: 'AJAX' },
//     { key: 'Android' },
//     { key: 'Selenium' },
//     { key: 'HTML' },
//     { key: 'Database' },
//     { key: 'MYSQL' },
//     { key: 'SQLLite' },
//     { key: 'Web Technology' },
//     { key: 'CSS' },
//     { key: 'Python' },
//     { key: 'Linux' },
//     { key: 'Kotlin' },
//   ],
// }

const [items, setItems] = React.useState([
  { name: 'TURQUOISE', code: '#1abc9c' },
  { name: 'EMERALD', code: '#2ecc71' },
  { name: 'PETER RIVER', code: '#3498db' },
  { name: 'AMETHYST', code: '#9b59b6' },
  { name: 'WET ASPHALT', code: '#34495e' },
  { name: 'GREEN SEA', code: '#16a085' },
  { name: 'NEPHRITIS', code: '#27ae60' },
  { name: 'BELIZE HOLE', code: '#2980b9' },
  { name: 'WISTERIA', code: '#8e44ad' },
  { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  { name: 'SUN FLOWER', code: '#f1c40f' },
  { name: 'CARROT', code: '#e67e22' },
  { name: 'ALIZARIN', code: '#e74c3c' },
  { name: 'CLOUDS', code: '#ecf0f1' },
  { name: 'CONCRETE', code: '#95a5a6' },
  { name: 'ORANGE', code: '#f39c12' },
  { name: 'PUMPKIN', code: '#d35400' },
  { name: 'POMEGRANATE', code: '#c0392b' },
  { name: 'SILVER', code: '#bdc3c7' },
  { name: 'ASBESTOS', code: '#7f8c8d' },
])

const dataArr = () => {
  const arr = [
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  ]
  return arr
}

const [items, setItems] = React.useState([
  { name: 'TURQUOISE', code: '#1abc9c' },
  { name: 'EMERALD', code: '#2ecc71' },
  { name: 'PETER RIVER', code: '#3498db' },
  { name: 'AMETHYST', code: '#9b59b6' },
  { name: 'WET ASPHALT', code: '#34495e' },
  { name: 'GREEN SEA', code: '#16a085' },
  { name: 'NEPHRITIS', code: '#27ae60' },
  { name: 'BELIZE HOLE', code: '#2980b9' },
  { name: 'WISTERIA', code: '#8e44ad' },
  { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  { name: 'SUN FLOWER', code: '#f1c40f' },
  { name: 'CARROT', code: '#e67e22' },
  { name: 'ALIZARIN', code: '#e74c3c' },
  { name: 'CLOUDS', code: '#ecf0f1' },
  { name: 'CONCRETE', code: '#95a5a6' },
  { name: 'ORANGE', code: '#f39c12' },
  { name: 'PUMPKIN', code: '#d35400' },
  { name: 'POMEGRANATE', code: '#c0392b' },
  { name: 'SILVER', code: '#bdc3c7' },
  { name: 'ASBESTOS', code: '#7f8c8d' },
])

const GridMenu = ({ errorText, description, ...props }) => (
  <View style={styles.container}>
    <FlatGrid
      itemDimension={260}
      data={setItems}
      style={styles.gridView}
      staticDimension={260}
      fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>Description</Text>
        </View>
      )}
    />
  </View>
)

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    textAlign: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    padding: 10,
    height: 110,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})

export default GridMenu
