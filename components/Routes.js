import React, { useContext,useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { AuthContext } from './AuthProvider'
import Center from './Center';
import { AuthStack } from './AuthStack';
import { AppTabs } from './AppTabs';

export const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [userToken, setuserToken] = useState(null);

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
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

