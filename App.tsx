/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.js
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';
import BarcodeScanner from './BarcodeScanner';
import BarcodeDataScreen from './BarcodeDataScreen';
import SerialNotFoundScreen from './SerialNotFoundScreen';
import InvalidBarcodeScreen from './InvalidBarcodeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BarcodeScanner" component={BarcodeScanner} options={{ headerShown: false }} />
            <Stack.Screen name="BarcodeDataScreen" component={BarcodeDataScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SerialNotFoundScreen" component={SerialNotFoundScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
