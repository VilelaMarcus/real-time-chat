import styled from 'styled-components';

export const ChatsContainer = styled.div`
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
  padding: 20px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LastMessage = styled.p`
  color: #666;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px; /* Defina a largura desejada para o contêiner LastMessage */
`;

export const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd; /* Adiciona uma linha de separação entre os chats */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0; /* Altera a cor de fundo ao passar o mouse */
  }

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

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh; /* Define a altura para ocupar toda a tela verticalmente */
`;
