import React, { useState } from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage'



export const AuthContext=React.createContext({
  user: {},
  login: () => {},
  logout: () => {}
});


export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { userName: "qiang", password: "123456" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        }
      }}  
    >
      {children}
    </AuthContext.Provider>
  );
}
