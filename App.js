import React from 'react'
import { Button, View , Text, StyleSheet} from 'react-native'
import ProductListScreen from './screens/ProductListScreen'
import TestScreen from './screens/TestScreen'
import  ApolloClient  from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import  DetailsScreen  from './screens/DetailsScreen';
import  HomeScreen from './screens/HomeScreen';
import SalesScreen from './screens/SalesScreen';
import SalesDetailsScreen from './screens/SalesDetailsScreen';
import HomeTabScreen from './screens/HomeTabScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const client= new ApolloClient({
  uri: 'http://192.168.1.48:4000/graphql'
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeTabScreen} /> 
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator> 
      
      </NavigationContainer> 
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  }
})