import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ChatHeader = styled.div`
 display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #333;
  color: #fff;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%; /* Torna a imagem do chat redonda */
    margin-right: 10px;
  }

  .userChatInfo {
    flex-grow: 1;
  }

  span {
    font-weight: bold;
  }

  p {
    color: #666;
  }
`;

export const MessagesContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const Message = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

export const ChatInputContainer = styled.div`
  background-color: #444;
  padding: 10px;
`;

export const ChatInput = styled.input`
  width: 95%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const SendMessageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  margin-left: 10px;
  vertical-align: middle; /* Alinha verticalmente com o input */
`;