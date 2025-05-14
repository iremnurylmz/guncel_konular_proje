import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './index';    // Home ekranı
import Game1Screen from './Game1';   // Game1 ekranı
import Game2Screen from './Game2';   // Game2 ekranı
import Game3Screen from './Game3';   // Game3 ekranı
import Game4Screen from './Game4';   // Game4 ekranı (Yeni sayfa)
import Game5Screen from './Game5';   // Game5 ekranı (Yeni oyun sayfası)

type RootStackParamList = {
  Home: undefined;
  Game1: undefined;
  Game2: undefined;
  Game3: undefined;
  Game4: undefined; 
  Game5: undefined; // Yeni oyun sayfası
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game1"
          component={Game1Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game2"
          component={Game2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game3"
          component={Game3Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game4"
          component={Game4Screen}  // Yeni sayfa burada eklendi
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game5"
          component={Game5Screen}  // Yeni sayfa burada eklendi
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
