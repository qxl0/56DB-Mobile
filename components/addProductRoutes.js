import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native"
import  Center  from "./Center";

export function Product({ route, navigation }) {
  const { colors } = useTheme();
  console.log("route params:", route.params);
  return (
    <Center style={[styles.card, { backgroundColor: colors.background}]}>
      <Text>{route.params.name}</Text>
      <Text>${route.params.price}</Text>
      <Text>${route.params.cost}</Text>
      <Text>Quantity: {route.params.quantity}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name
          })
        }
      />
    </Center>
  );
}

function apiCall(x) {
  return x;
}

export function EditProduct({ route, navigation }) {
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    // api call with new form state
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}

export const addProductRoutes = (
  Stack
) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // submit the form
                if (route.params.submit) {
                  route.params.submit.current();
                }
              }}
              style={{ paddingRight: 8 }}
            >
              <Text
                style={{
                  color: "red"
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          )
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`
        })}
        name="Product"
        component={Product}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    fontFamily: "open-sans",
    fontSize: 20,
    borderRadius: 10
  }
})