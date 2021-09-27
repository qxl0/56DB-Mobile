import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  Center  from "./Center";
import { Text, TouchableOpacity, FlatList, Button, StyleSheet, ActivityIndicator } from "react-native";
import { AuthContext } from "./AuthProvider";
import { addProductRoutes } from "./addProductRoutes";
import { useQuery} from '@apollo/react-hooks'
import { GetAllItemsQuery } from "../GraphQL/Queries";
import ItemCard from "./ItemCard";
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

function Feed({ navigation }){
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
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          // console.log("item:", item.Description, item.Price)
          return (
            <ItemCard
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
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
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