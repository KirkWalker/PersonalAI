// src/components/MessageItem.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type MessageItemProps = {
  text: string;
  sender: 'user' | 'system';
};

const MessageItem: React.FC<MessageItemProps> = ({
  text,
  sender,
}: MessageItemProps) => {
  const isUser = sender === 'user';

  return (
    <View style={[styles.card, isUser ? styles.userCard : styles.systemCard]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0', // light grey
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 8,
    elevation: 2, // adds shadow on Android
  },
  userCard: {
    backgroundColor: '#d1e7dd', // greenish bubble
    alignSelf: 'flex-end',
  },
  systemCard: {
    backgroundColor: '#f0f0f0', // grey bubble
    alignSelf: 'flex-start',
  },

  text: {
    fontSize: 16,
    color: '#333',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
});
