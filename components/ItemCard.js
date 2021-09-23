import React from 'react'
import { Text,TouchableOpacity, View, StyleSheet } from 'react-native'
const ItemCard = ({title,price, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.text}>
          {title}
        </Text>
        <Text style={styles.price}>
          ${price}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
  }
})
