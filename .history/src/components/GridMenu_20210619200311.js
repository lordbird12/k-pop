import React from 'react'
import { Platform, StyleSheet, FlatList, Text, View, Alert } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { FlatGrid } from 'react-native-super-grid'
import { theme } from '../core/theme'
import APIKit, { setClientToken } from '../shared/APIKit'

export default function GridMenu() {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:9080/kp/api/cross.php')
      .then((data) => {
        return data.json()
      })
      .then((data) => {
        setItems(data)
      })
      .catch((err) => {
        console.log(123123)
      })
  }, [])

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
