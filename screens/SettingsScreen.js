import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is the Settings page</Text>
      <Button
        title="Back to the Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
})