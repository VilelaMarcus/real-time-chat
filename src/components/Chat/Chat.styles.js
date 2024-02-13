import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ChatHeader = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  height: 30px;
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
