import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text } from 'react-native-paper';
import QuestItem from '../components/QuestItem';
import { theme } from '../constants/theme';
import LottieView from 'lottie-react-native';

const QUESTS = [
  { id: '1', title: 'Drink Water' },
  { id: '2', title: 'Stretch for 2 Minutes' },
  { id: '3', title: 'Take Deep Breaths' },
];

export default function QuestScreen() {
  const [completed, setCompleted] = useState([]);
  const [xp, setXp] = useState(0);
  const [levelUp, setLevelUp] = useState(false);

  const completeQuest = (id) => {
    if (!completed.includes(id)) {
      const newXP = xp + 10;
      if (newXP >= 100) {
        setLevelUp(true);
        setTimeout(() => setLevelUp(false), 3000);
        setXp(newXP - 100);
      } else {
        setXp(newXP);
      }

      setCompleted([...completed, id]);
      Alert.alert('✅ Quest Complete', '+10 XP!');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={{ marginBottom: 20 }}>Today's Quests</Text>
      {QUESTS.map((q) => (
        <QuestItem
          key={q.id}
          title={q.title}
          completed={completed.includes(q.id)}
          onComplete={() => completeQuest(q.id)}
        />
      ))}

      {levelUp && (
        <LottieView
          source={require('../assets/levelup.json')}
          autoPlay
          loop={false}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
  }
});
