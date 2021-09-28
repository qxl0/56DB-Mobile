import React from 'react'
import { Text,TouchableOpacity, View, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';


const ItemCard = ({title,price, onPress, style}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.container, style} onPress={onPress}>
      <View style={
          {
            flex: 1,
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginBottom: 10,
          }
        }>
        <Text style={[styles.text, 
          {backgroundColor: colors.background, color: colors.text}]}>
          {title}
        </Text>
        <Text style={
          {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            backgroundColor: colors.background,
            color: colors.text,
          }
        }>
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
    fontSize: 18,
    paddingTop: 20
  },
  price: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
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
