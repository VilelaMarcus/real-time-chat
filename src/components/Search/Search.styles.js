import styled from 'styled-components';

// Container principal do Search
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px; /* Espaçamento interno */
  background-color: #444; /* Cor de fundo do Search */
  color: #fff; /* Cor do texto */
`;

// Estilos para o input de busca
export const SearchInput = styled.input`
  flex-grow: 1; /* Ocupa todo o espaço disponível */
  border: none; /* Sem borda */
  background-color: transparent; /* Cor de fundo transparente */
  color: #fff; /* Cor do texto */
  font-size: 14px; /* Tamanho da fonte */
  padding: 5px; /* Espaçamento interno */
`;

// Estilos para o botão de busca
export const SearchButton = styled.button`
  background-color: transparent; /* Cor de fundo transparente */
  border: none; /* Sem borda */
  color: #fff; /* Cor do texto */
  cursor: pointer; /* Cursor do mouse */
  font-size: 14px; /* Tamanho da fonte */
  margin-left: 10px; /* Espaçamento à esquerda */
  transition: color 0.3s ease; /* Transição suave de cor */

  &:hover {
    color: #ddd; /* Cor do texto ao passar o mouse */
  }
`;
