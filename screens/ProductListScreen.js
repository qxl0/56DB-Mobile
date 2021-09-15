import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import Store from "../components/Store";
import { useQuery} from '@apollo/react-hooks'
import { AppContext } from "../AppContext";
import { GetItemsQuery } from "../GraphQL/Queries";

export default ProductListScreen = ({route, navigation}) => {
  /* 2. Get the param */
  const { text } = route.params;
  const [state, setState] = useState({ query: null });
  const getQuery = () => {
    return GetItemsQuery(text);
  };

  // useEffect(() => {
  //   const query = getQuery();
  //   setState({ query });
  // }, [state.query]);

  // if (!state || !state.query) {
  //   console.log("state.query === null");
  //   return <View style={styles.loading}></View>;
  // }

  const { error, loading, data } = useQuery(GetItemsQuery(text));
  if (loading || error)
  return (
    <ActivityIndicator
      style={styles.loading}
      size="large"
      color="#0000ff"
    />
  );
  const items = data.queryitems;
        if (items.length === 0) {
          return (
            <View style={styles.notfound}>
              <Text>No items found</Text>
            </View>
          )
        };

  const items2 = items.map((item) => {
    return { ...item, Price: `$ ${item.Price} USD` };
  });
  return (
    <AppContext.Provider value={items2}>
      <View style={styles.container}>
        <Store />
        <StatusBar style="auto" />
      </View>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notfound: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
