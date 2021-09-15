import React from 'react'
import { Button, View , Text, StyleSheet} from 'react-native'
import ProductListScreen from './screens/ProductListScreen'
import TestScreen from './screens/TestScreen'
import  ApolloClient  from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  DetailsScreen  from './screens/DetailsScreen';
import  HomeScreen from './screens/HomeScreen';
import SalesScreen from './screens/SalesScreen';
import SalesDetailsScreen from './screens/SalesDetailsScreen';

const Stack = createNativeStackNavigator();

const client= new ApolloClient({
  uri: 'http://192.168.1.48:4000/graphql'
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="Sales" component={SalesScreen} />
          <Stack.Screen name="SalesDetails" component={SalesDetailsScreen} />
        </Stack.Navigator>
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