import {
  ChatContainer,
  ChatHeader,
  MessagesContainer,
  Message,
  ChatInputContainer,
  ChatInput,
} from './Chat.styles';

const Chat = () => {




  
  return (
    <ChatContainer>
      <ChatHeader>Chat Title</ChatHeader>
      <MessagesContainer>
        <Message>User 1: Hello</Message>
        <Message>User 2: Hi there!</Message>
        {/* Add more messages here */}
      </MessagesContainer>
      <ChatInputContainer>
        <ChatInput type="text" placeholder="Type your message..." />
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chat;
