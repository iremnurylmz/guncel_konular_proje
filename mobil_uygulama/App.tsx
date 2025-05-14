import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text, StyleSheet } from 'react-native';

// Ekranları tanımlıyoruz
const Stack = createNativeStackNavigator();

// HomeScreen: Ana Sayfa
function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ana Sayfa</Text>
      {/* Oyun 1 ve Oyun 2 butonları */}
      <Button
        title="Oyun 1"
        onPress={() => navigation.navigate('Game1')}
      />
      <Button
        title="Oyun 2"
        onPress={() => navigation.navigate('Game2')}
      />
    </View>
  );
}

// Game1Screen: Oyun 1
function Game1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyun 1 Ekranı</Text>
    </View>
  );
}

// Game2Screen: Oyun 2
function Game2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyun 2 Ekranı</Text>
    </View>
  );
}

// App Bileşeni: Navigasyon yapısı
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game1" component={Game1Screen} />
        <Stack.Screen name="Game2" component={Game2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
