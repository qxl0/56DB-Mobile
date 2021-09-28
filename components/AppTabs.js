import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome,AntDesign, Ionicons, EvilIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native"
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";
import { SalesStack } from "./SalesStack";
import Icon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

export const AppTabs = ({navigation}) => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            return <FontAwesome name="home" size={size} color={color} />
          } else if (route.name === "Search") {
            return <EvilIcons name={"search"} size={size} color={color} />;
          } else if (route.name === "Sales") {
            return <Ionicons name={"ios-cart"} size={size} color={color} />;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: "#009683"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tabs.Screen name="Home" component={HomeStack} 
        options={{ title:"Overview",
        headerLeft: ()=>(
          <Icon.Button name="ios-menu" size={25} 
            color={colors.text}
            backgroundColor="#009683"
            onPress={()=>navigation.openDrawer()}></Icon.Button>
        )}}
         />
      <Tabs.Screen name="Sales" component={SalesStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
    </Tabs.Navigator>
  );
};