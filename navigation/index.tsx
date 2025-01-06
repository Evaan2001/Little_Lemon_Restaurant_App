import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LittleLemonHeader from '../components/LittleLemonHeader';
import LittleLemonFooter from '../components/LittleLemonFooter';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import OnboardingScreen from '../screens/Onboarding';
import ProfileScreen from '../screens/Profile';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
// Define types for the props (optional but recommended)
interface RootStackProps {
  isLoggedIn: boolean;
  userData: {
    name: string | null;
    email: string | null;
  };
}

export default function RootStack({ isLoggedIn, userData }: RootStackProps) {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? "Home" : "Oboarding"}
        screenOptions={{
          header: () => <LittleLemonHeader />
        }}
      >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Oboarding" component={OnboardingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      <View style={styles.footerContainer}>
        {/* <LittleLemonFooter /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});
