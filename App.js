import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import QuestScreen from './screens/QuestScreen';
import ProfileScreen from './screens/ProfileScreen';
import { theme } from './constants/theme';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={{ ...theme }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: theme.colors.surface }, headerTintColor: theme.colors.text }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Quests" component={QuestScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
