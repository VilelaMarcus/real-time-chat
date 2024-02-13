// Sidebar.styles.js
import styled from '@emotion/styled';

// Container principal do sidebar
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0; /* Cor de fundo do sidebar */
  width: 300px; /* Largura do sidebar */
  height: 100vh; /* Altura do sidebar, ocupará toda a altura da tela */
  border-right: 1px solid #ccc; /* Adiciona uma linha à direita do sidebar */
  overflow-y: auto; /* Adiciona scroll apenas se o conteúdo exceder a altura do sidebar */
`;