import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import constants from 'picomatch/lib/constants';


function Screen({children}) {
  return (
    <SafeAreaView style={styles.screen}>
      <props.children />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  }
})
export default Screen
