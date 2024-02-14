import { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { ChatContainer, ChatHeader, MessagesContainer, ChatInputContainer, ChatInput, SendMessageButton } from './Chat.styles';
import Messages from '../Messages/Messages';
import { useSelector } from 'react-redux';

const Chat = () => {
  const chatInfo = useSelector((state) => state.chat);
  const [messageText, setMessageText] = useState('');

  // Função para lidar com o envio de mensagens
  const handleMessageSend = () => {
    if (messageText.trim() !== '') {
      // Lógica para enviar a mensagem
      console.log('Mensagem enviada:', messageText);
      // Limpar o campo de entrada após o envio
      setMessageText('');
    }
  };

  // Função para lidar com a pressão da tecla Enter no campo de entrada
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  return (
    <ChatContainer>
      {chatInfo.chatId === '' ? (
        <div>Envie e receba mensagens no melhor aplicativo de mensagens online</div>
      ) : (
        <>
          <ChatHeader>{chatInfo.ChatName}</ChatHeader>
          <MessagesContainer>
            <Messages />
          </MessagesContainer>
          <ChatInputContainer>
            <ChatInput
              type="text"
              placeholder="Digite sua mensagem..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <SendMessageButton onClick={handleMessageSend}>
              <SendIcon />
            </SendMessageButton>
          </ChatInputContainer>
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
