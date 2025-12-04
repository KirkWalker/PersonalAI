import { useState, useRef, useEffect } from 'react';
import { FlatList } from 'react-native';
import SYSTEM_RESPONSES from '../data/systemResponses';
import SYSTEM_OPTIONS, { SystemOption } from '../data/systemOptions';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'system';
  options?: SystemOption[];
};

const getRandomSystemResponse = () => {
  const index = Math.floor(Math.random() * SYSTEM_RESPONSES.length);
  return SYSTEM_RESPONSES[index];
};

export function useChatConversation() {
  const initialMessage: Message = {
    id: 1,
    text: 'Hello, what can I help you with today',
    sender: 'system',
    options: SYSTEM_OPTIONS,
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputText, setInputText] = useState('');
  const flatListRef = useRef<FlatList<any>>(null);
  // Temporary "fetching..." message
  const fetchingMessage: Message = {
    id: messages.length + 3,
    text: 'fetching...',
    sender: 'system',
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      text: inputText.trim(),
      sender: 'user',
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputText('');
    setMessages((prev) => [...prev, fetchingMessage]);

    setTimeout(() => {
      const systemMessage: Message = {
        id: messages.length + 2,
        text: getRandomSystemResponse(),
        sender: 'system',
      };
      setMessages((prev) => {
        // Remove the last "fetching..." message
        const withoutFetching = prev.filter((m) => m.text !== 'fetching...');
        return [...withoutFetching, systemMessage];
      });
    }, 1500);
  };

  const handleOptionSelect = (option: SystemOption) => {
    // Add user choice
    const userChoice: Message = {
      id: messages.length + 1,
      text: option.label,
      sender: 'user',
    };

    // Add system response
    const systemResponse: Message = {
      id: messages.length + 2,
      text: `Great, let me fetch information on ${option.label}`,
      sender: 'system',
    };

    setMessages((prev) => [
      ...prev,
      userChoice,
      systemResponse,
      fetchingMessage,
    ]);

    // Replace "fetching..." with actual mock data after delay
    setTimeout(() => {
      setMessages((prev) => {
        // Remove the last "fetching..." message
        const withoutFetching = prev.filter((m) => m.text !== 'fetching...');
        const systemData: Message = {
          id: withoutFetching.length + 1,
          text: option.mockData,
          sender: 'system',
        };
        return [...withoutFetching, systemData];
      });
    }, 1500); // 1.5s delay for realism
  };

  const resetConversation = () => {
    setMessages([initialMessage]);
    setInputText('');
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return {
    messages,
    inputText,
    setInputText,
    handleSend,
    handleOptionSelect,
    resetConversation,
    flatListRef,
  };
}
