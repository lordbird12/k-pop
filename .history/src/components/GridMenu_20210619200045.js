import React from 'react'
import { Platform, StyleSheet, FlatList, Text, View, Alert } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { FlatGrid } from 'react-native-super-grid'
import { theme } from '../core/theme'
import APIKit, { setClientToken } from '../shared/APIKit'

export default function GridMenu() {
  const [items, setItems] = React.useState([
    { title: 'CLOUDS', desc: '#ecf0f1' },
    { title: 'CONCRETE', desc: '#95a5a6' },
    { title: 'ORANGE', coddesce: '#f39c12' },
    { title: 'PUMPKIN', desc: '#d35400' },
    { title: 'POMEGRANATE', desc: '#c0392b' },
    { title: 'SILVER', desc: '#bdc3c7' },
    { title: 'ASBESTOS', desc: '#7f8c8d' },
  ])

  return (
    <View style={styles.container}>
    <FlatGrid
      itemDimension={260}
      data={items}
      style={styles.gridView}
      staticDimension={260}
      fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: '#000fff' }]}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemCode}>{item.desc}</Text>
        </View>
      )}
    />
    </View>
  {/* </View>
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    /> */}
  )
}

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

// export default GridMenu
