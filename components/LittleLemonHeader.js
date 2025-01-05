import * as React from 'react';
import { View, SafeAreaView, Text, StatusBar, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <>
      <StatusBar backgroundColor="#EE9972" barStyle="light-content" />
      <SafeAreaView backgroundColor="#EE9972">
        <View style={styles.container}>
          <Text style={styles.headerText}>Little Lemon</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
  },
  headerText: {
    paddingBottom: 15,
    paddingHorizontal: 20,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
