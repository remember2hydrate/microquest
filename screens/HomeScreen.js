import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, ProgressBar } from 'react-native-paper';
import { theme } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  const xp = 30; // hardcoded for now
  const level = 1;

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge">🎯 MicroQuest</Text>
      <Text style={styles.level}>Level {level}</Text>
      <ProgressBar progress={xp / 100} color={theme.colors.accent} style={styles.progress} />
      <Text style={styles.xp}>{xp} / 100 XP</Text>

      <Button mode="contained" onPress={() => navigation.navigate('Quests')} style={styles.button}>
        Go to Quests
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Profile')} style={styles.button}>
        View Profile
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center', padding: 20 },
  level: { color: theme.colors.text, fontSize: 24, marginTop: 8 },
  xp: { color: theme.colors.text, marginBottom: 20 },
  progress: { width: '80%', height: 10, marginVertical: 10 },
  button: { marginTop: 10, width: '80%' },
});
