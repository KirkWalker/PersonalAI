import React from 'react';
import {
  FlatList,
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MessageItem from '../components/MessageItem';
import { useChatConversation } from '../hooks/useChatConversation';
import { SystemOption } from '../data/systemOptions';

export default function ChatScreen() {
  const {
    messages,
    inputText,
    setInputText,
    handleSend,
    handleOptionSelect,
    resetConversation,
    flatListRef,
  } = useChatConversation();

  const renderMessage = ({ item }: any) => (
    <View>
      <MessageItem text={item.text} sender={item.sender} />
      {item.options && (
        <View style={styles.optionsRow}>
          {item.options.map((opt: SystemOption, idx: number) => (
            <TouchableOpacity
              key={idx}
              style={styles.optionButton}
              onPress={() => handleOptionSelect(opt)}
            >
              <Text style={styles.optionText}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.topBar}>
          <Button title="Reset" onPress={resetConversation} />
        </View>

        <Text style={styles.title}>Personal AI Chatbot</Text>
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMessage}
          contentContainerStyle={{ paddingBottom: 70 }}
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your message..."
          />
          <Button title="Send" onPress={handleSend} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    alignItems: 'flex-end',
  },
  inputRow: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  title: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 12,
    marginVertical: 6,
  },
  optionButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    margin: 4,
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
});
