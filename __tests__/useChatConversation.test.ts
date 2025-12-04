import { renderHook, act } from '@testing-library/react';
import { useChatConversation } from '../src/hooks/useChatConversation';
import systemOptions from '../src/data/systemOptions';

describe('useChatConversation - First Load', () => {
  it('should start with system greeting and options', () => {
    const { result } = renderHook(() => useChatConversation());

    expect(result.current.messages[0].text).toBe(
      'Hello, what can I help you with today',
    );
  });

  it('should add a system response when an option is selected', () => {
    const { result } = renderHook(() => useChatConversation());

    act(() => {
      result.current.handleOptionSelect(systemOptions[0]);
    });

    const lastMessage =
      result.current.messages[result.current.messages.length - 1];

    expect(lastMessage.text).toBe('fetching...');
  });
});

describe('useChatConversation - User input', () => {
  it('should add the user message to the list when handleSend is called', () => {
    const { result } = renderHook(() => useChatConversation());

    // Simulate typing into the input
    act(() => {
      result.current.setInputText('Hello Copilot!');
    });

    // Simulate pressing send
    act(() => {
      result.current.handleSend();
    });

    // Grab the last message
    const lastMessage =
      result.current.messages[result.current.messages.length - 2];

    expect(lastMessage.text).toBe('Hello Copilot!');
    expect(lastMessage.sender).toBe('user');
  });
});
