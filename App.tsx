import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import RootStack from './navigation';
import { useState, useEffect } from 'react'
import LoadingScreen from './screens/Loading'

type UserData = {
  name: string | null;
  email: string | null;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    name: null,
    email: null
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [name, email] = await Promise.all([
          AsyncStorage.getItem('name'),
          AsyncStorage.getItem('email')
        ]);

        if (name && email) {
          setIsLoggedIn(true);
          setUserData({ name, email });  // Now TypeScript knows these properties are valid
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

  return <RootStack isLoggedIn={isLoggedIn} userData={userData} />;
}