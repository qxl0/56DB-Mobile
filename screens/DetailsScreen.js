import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

function DetailsScreen({navigation}) {
  const [text, setText] = useState('');

  const onSearchHandler = () => {
    navigation.navigate('ProductList', { text });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Search Items"
        onPress={() => {
          navigation.navigate('ProductList', { text })
        }}
        style={styles.button}
      />
    </SafeAreaView>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 12,
  },
})