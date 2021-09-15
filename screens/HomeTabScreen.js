import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProductListScreen from './ProductListScreen';
import SalesScreen from './SalesScreen';
import SalesDetailsScreen from './SalesDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabScreen() {
  return (
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            title: '',
          }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="Sales" component={SalesScreen} />
          <Stack.Screen name="SalesDetails" component={SalesDetailsScreen} />
        </Stack.Navigator> 
  )
}

export default HomeTabScreen
