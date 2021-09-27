import React, { useState } from 'react'
import { Text } from 'react-native'
import  AsyncStorage  from '@react-native-async-storage/async-storage'
import { LOGIN, LOGOUT, REGISTER } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/react-hooks';

export const AuthContext=React.createContext({
  user: {},
  login: () => {},
  logout: () => {},
  register: () => {},
  toggleTheme: () => {},
  isDarkTheme: false
});


export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [calllogin, { data, loading, error }] = useMutation(LOGIN);
  const [callLogout, { logoutData, logoutLoading, logoutError }] = useMutation(LOGOUT);
  const [callRegister, { registerData, registerLoading, registerError }] = useMutation(REGISTER);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // { onCompleted({ login }) {
  //     console.log("completed calling login", login)
  //     if (login) {
  //       setUser(login);
  //       AsyncStorage.setItem('user', JSON.stringify(login));
  //     }
  //   }
  //  }); 
  if (loading) return <Text>Submitting...</Text>;
  if (error) return <Text>Submission error {error} </Text>;

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (user) => { 
          if (!user.hasOwnProperty('password')){
            setUser(null);
            AsyncStorage.removeItem('user');
            return;
          }
          const {data, loading, error } = await calllogin({ 
            variables: { password: user?.password, 
                         username: user.username 
                      }
              });
          if (error) {
            console.log("error", error)
            setUser(null); 
          }
          if (data) {
            console.log("data", data)
            data.login.user.password = user.password;
            setUser(data.login.user);
            AsyncStorage.setItem('user', JSON.stringify(data.login.user));
          }
        },
        logout: async () =>  {
          const {data, loading, error } = await callLogout();
          console.log("logout, ", data)
          setUser(null);
          AsyncStorage.removeItem("user");
        },
        register: async (user) => {
          const {data, loading, error } = await callRegister({
            variables: { 
              options: {
                username: user.username,
                password: user.password,
                email: user.email,
              }
            }
          });
          if (error) {
            console.log("error", error)
            setUser(null); 
          }
          if (data) {
            console.log("data", data)
            setUser(data.register.user);
            AsyncStorage.setItem('user', JSON.stringify(data.register.user));
          }
        },
        toggleTheme: () => {
          console.log("inside toggleTheme:", isDarkTheme)

          setIsDarkTheme(isDarkTheme => !isDarkTheme);
        },
        isDarkTheme: isDarkTheme
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
