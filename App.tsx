import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStack from './navigation';
import { useState, useEffect, createContext } from 'react';
import React from 'react';
import LoadingScreen from './screens/Loading';

// Define the types for userData and context
type UserData = {
  name: string | null;
  email: string | null;
};

type ContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

// Create the context with the correct type
export const Context = createContext<ContextType>({
  userData: {
    name: null,
    email: null,
  },
  setUserData: () => { },
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    name: null,
    email: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [name, email] = await Promise.all([
          AsyncStorage.getItem('name'),
          AsyncStorage.getItem('email'),
        ]);

        if (name && email) {
          setUserData({ name, email });
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Context.Provider value={{ userData, setUserData }}>
      <RootStack isLoggedIn={isLoggedIn} />
    </Context.Provider>
  );
}
