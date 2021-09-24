import React from 'react'
import  ApolloClient  from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import  AuthProvider  from './components/AuthProvider';
import { Routes } from './components/Routes';


const client= new ApolloClient({
    uri: 'http://74.109.5.248:4000/graphql'
  // uri: 'http://localhost:4000/graphql'
});


export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Routes /> 
      </AuthProvider>
    </ApolloProvider>
  )
}
