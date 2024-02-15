import styled from 'styled-components';

export const ChatsContainer = styled.div`
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
  padding: 20px;
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
