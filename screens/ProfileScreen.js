import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { theme } from '../constants/theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>🏆 Profile</Text>

      <Card style={styles.card} mode="elevated">
        <Card.Content>
          <Text variant="titleMedium">Level: 1</Text>
          <Text>Total XP: 0</Text>
          <Text>Quests Completed: 0</Text>
          <Text>Streak: 0 Days</Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    color: theme.colors.text,
    marginBottom: 20
  },
  card: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    width: '90%',
    borderRadius: 12
  }
});
