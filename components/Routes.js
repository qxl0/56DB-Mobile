import React, { useContext,useState, useEffect } from 'react'
import { NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import { Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme } from 'react-native-paper';
import { ActivityIndicator, View, Text } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthProvider'
import Center from './Center';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';
import { DrawerContent} from '../screens/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

export const Routes = () => {
  const { user, setUser,isDarkTheme } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userToken, setuserToken] = useState(null);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#000000',   
    } 
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    } 
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          // decode it
          // tempuser = JSON.parse(userString);
          // login(tempuser)
          setUser(userString);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  

  console.log("user: ", user)
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {user ? 
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}  
            drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home"  component={AppTabs} />
        </Drawer.Navigator>
        : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
}

