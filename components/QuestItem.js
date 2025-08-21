import React from 'react';
import { Card, Button, Text } from 'react-native-paper';

export default function QuestItem({ title, completed, onComplete }) {
  return (
    <Card style={{ marginVertical: 8 }} mode="elevated">
      <Card.Content>
        <Text variant="titleMedium">{completed ? `✔️ ${title}` : title}</Text>
        <Button mode="contained-tonal" onPress={onComplete} disabled={completed}>
          {completed ? 'Done' : 'Complete'}
        </Button>
      </Card.Content>
    </Card>
  );
}
