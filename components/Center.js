import React from 'react'
import { View, StyleSheet } from 'react-native'

function Center({ children, style }) {
  return (
    <View style={{...styles.container, style}}>
      {children}
    </View> 
  )
}

export default Center
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})