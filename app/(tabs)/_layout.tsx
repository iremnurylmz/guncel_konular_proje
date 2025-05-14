import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
        tabBarShowLabel: false, // Sekme isimlerini gizliyoruz
      }}
    >
      {/* Home ekranı sekmesi, Home simgesi ile */}
      <Tabs.Screen
        name="index" // Home sayfası
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size ?? 28} color={color} />
          ),
        }}
      />

      {/* Game 1 sekmesi */}
      <Tabs.Screen
        name="Game1"
        options={{
          title: 'Game 1',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size ?? 28} color={color} />
          ),
        }}
      />

      {/* Game 2 sekmesi */}
      <Tabs.Screen
        name="Game2"
        options={{
          title: 'Game 2',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" size={size ?? 28} color={color} />
          ),
        }}
      />

      {/* Game 3 sekmesi */}
      <Tabs.Screen
        name="Game3"
        options={{
          title: 'Game 3',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="happy" size={size ?? 28} color={color} />
          ),
        }}
      />

      {/* Game 4 sekmesi */}
      <Tabs.Screen
        name="Game4"
        options={{
          title: 'Game 4',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size ?? 28} color={color} />
          ),
        }}
      />

      {/* Game 5 sekmesi */}
      <Tabs.Screen
        name="Game5"
        options={{
          title: 'Game 5',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller-sharp" size={size ?? 28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
