import React from 'react'
import { View , StyleSheet} from 'react-native'
import ProductListScreen from './screens/ProductListScreen'
import TestScreen from './screens/TestScreen'
import  ApolloClient  from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client= new ApolloClient({
  uri: 'http://192.168.1.48:4000/graphql'
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <ProductListScreen />
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  }
})