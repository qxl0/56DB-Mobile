import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Store from './components/Store';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { AppContext } from './AppContext';

const client= new ApolloClient({
  uri: 'http://192.168.1.48:4000/graphql'
});

const getQuery = () => {
  const desc = "abb";
  return
  `
    query {
          queryitems(desc: "abb"}){
            ID,
            Description,
            Price
          }
        }
    `
};

export default function App() {

  const [state, setState] = useState({query: null});

  useEffect(() => {
    console.log("useEffect:", state.query);
    const query = getQuery();
    setState({query});
  }, [ state.query] );

  if (state.query === null) {
    console.log("state.query === null");
    return <View style={styles.loading}></View>  
  }

  console.log("state.query !== null", state.query);
  return (

    <ApolloProvider client={client}>
      {/* <Query query={gql `${state.query}` }> */}
      <Query query={
            gql `query { queryitems(desc: "abb") { ID, Description,Price}}` } >
        {({ loading, error, data }) => {
          if (loading || error) return <ActivityIndicator size="large" color="#0000ff" />
          const items = data.queryitems;
          console.log("items: ", items);
          const items2 = items.map(item => 
            { return {...item, Price: `$ ${item.Price} USD`}} );
          return (
            <AppContext.Provider value={ items2 }>
              <View style={styles.container}>
                <Store />
                <StatusBar style="auto" />
              </View>
            </AppContext.Provider>
          )
        }}
      </Query>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
