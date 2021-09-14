import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Store from "../components/Store";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { AppContext } from "../AppContext";
import { GetItemsQuery } from "../GraphQL/Queries";

export default ProductListScreen = () => {
  const [state, setState] = useState({ query: null });
  const getQuery = () => {
    const desc = "alm";
    return GetItemsQuery(desc);
  };

  useEffect(() => {
    const query = getQuery();
    setState({ query });
  }, [state.query]);

  if (!state || !state.query) {
    console.log("state.query === null");
    return <View style={styles.loading}></View>;
  }

  console.log("state.query !== null", state);
  return (
    <Query
      query={gql`
        ${state.query}
      `}
    >
      {({ loading, error, data }) => {
        if (loading || error)
          return (
            <ActivityIndicator
              style={styles.loading}
              size="large"
              color="#0000ff"
            />
          );
        const items = data.queryitems;
        {
          /* console.log("items: ", items); */
        }
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
      }}
    </Query>
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
});
