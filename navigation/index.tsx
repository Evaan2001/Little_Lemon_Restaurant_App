import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LittleLemonHeader from '../components/LittleLemonHeader';
import LittleLemonFooter from '../components/LittleLemonFooter';
import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/Login';
import OnboardingScreen from '../screens/Onboarding';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Oboarding"
        screenOptions={{
          header: () => <LittleLemonHeader />
        }}
      >
        <Stack.Screen name="Oboarding" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
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
