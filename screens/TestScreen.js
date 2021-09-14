import React from 'react'
import {SafeAreaView, View, StyleSheet} from 'react-native'

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  }
})
