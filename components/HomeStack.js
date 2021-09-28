import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  Center  from "./Center";
import { Text, TouchableOpacity, FlatList, Button, StatusBar, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext } from "./AuthProvider";
import { addProductRoutes } from "./addProductRoutes";
import { useQuery} from '@apollo/react-hooks'
import { GetAllItemsQuery } from "../GraphQL/Queries";
import ItemCard from "./ItemCard";
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeProvider, useTheme } from "@react-navigation/native";

const Stack = createStackNavigator();

function Feed({ navigation }){
  const { colors } = useTheme();
  const theme = useTheme();
  const { error, loading, data} = useQuery(GetAllItemsQuery());
  if (loading || error)
  return (
    <ActivityIndicator
      style={styles.loading}
      size="large"
      color="#0000ff"
    />
  );

  const items = data.items;
  return (
    <Center>
      <StatusBar barStyle= {theme.dark?'light-content':'dark-content'} />
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          // console.log("item:", item.Description, item.Price)
          return (
            <ItemCard
              style={{ backgroundColor: colors.background, color: colors.text }}
              title={item.Description}
              price={item.Price}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item.Description,
                  price: item.Price,
                  cost: item.Cost,
                  quantity: item.Quantity,
                  id: item.ID,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={items}
      />
    </Center>
  );
}

export const HomeStack = ({navigation}) => {
  const { colors } = useTheme();
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed" screenOptions={{headerShown: false}}>
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        options={{
           title: "",
        
          // headerRight: () => {
          //   return (
          //     <TouchableOpacity
          //       onPress={() => {
          //         logout();
          //       }}
          //     >
          //       <Text>LOGOUT</Text>
          //     </TouchableOpacity>
          //   );
          // }
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
})