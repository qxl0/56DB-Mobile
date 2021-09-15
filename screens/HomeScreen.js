import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({navigation}) {
  return (
    <ImageBackground 
      blurRadius={2}
      source={require('../assets/background.jpg')}
      style={styles.background}>
      <Text>Home Screen</Text>
      <Button
        title="Product Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Sales Details"
        onPress={() => navigation.navigate('Sales')}
      />
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

})