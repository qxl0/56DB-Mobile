import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, FlatList, Keyboard, TextInput, StyleSheet, View} from "react-native";
import  Center  from "./Center";
import { useQuery } from "@apollo/react-hooks";
import { addProductRoutes } from "./addProductRoutes";
import { GetItemsQuery } from "../GraphQL/Queries";
import ItemCard from  "./ItemCard";

const Stack = createStackNavigator();

function Search({ navigation, search }) {
  const [searchText, setSearchText] = useState("Abb");
  const [show, setShow] = useState(false);
  const  query = GetItemsQuery(searchText);
  const { data } = useQuery(query);
  console.log("data", data); 
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type any character to search"
          onChangeText={text=>{
            setShow(false);
            setSearchText(text)}
           } />
      <Button
        title="Search Products"
        onPress={() => {
          setShow(false);
          const  query = GetItemsQuery(searchText);
          Keyboard.dismiss();
          setShow(true);
        }}
      />
      {show && data ? (
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => {
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
          keyExtractor={(item) => item.ID}
          data={data.queryitems}
        />
      ) : null}
    </View>
  );
}

export const SearchStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} options={{title: 
          ""}}/>
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    height: 40,
    borderRadius: 5,
    marginBottom: 10
  }
})