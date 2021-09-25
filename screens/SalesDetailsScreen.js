import React, {useEffect} from "react";
import {
  Text,
  Button,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { useQuery} from '@apollo/react-hooks';
import { GetSalesQuery } from "../GraphQL/Queries";
export default SalesDetailsScreen = ({ route, navigation }) => {
  const { startDate, endDate } = route.params;

  let s = new Date(startDate);
  let ss = s.toISOString().split('T')[0]
  let e = new Date(endDate);
  let ee = e.toISOString().split('T')[0]
  console.log('start date is:', ss);
  console.log('end date is:', ee);
  const query = GetSalesQuery(ss, ee);
  const { error, loading, data } = useQuery(query);
  if (error) {
    console.log(error);
    return <Text>Error</Text>;
  }
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (data) {
    console.log(data.sales);
  }
  
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Sales Details Screen</Text>
        <Text style={styles.titleText}>Start Date: {ss}</Text>
        <Text style={styles.titleText}>End Date: {ee}</Text>
        <Text style={styles.titleText}>Sales: ${data.sales[0].SaleAmount} USD</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})
