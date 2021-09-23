import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SalesScreen from '../screens/SalesScreen';
import SalesDetailsScreen from '../screens/SalesDetailsScreen';

const Stack = createStackNavigator();
export const SalesStack = () => {
  return (
    <Stack.Navigator initialRouteName="SalesScreen">
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="SalesDetails" component={SalesDetailsScreen} />
    </Stack.Navigator>
  )
}
