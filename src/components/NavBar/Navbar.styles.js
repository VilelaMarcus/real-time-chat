import styled from 'styled-components';

// Container principal do Navbar
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Espaçamento interno */
  background-color: #333; /* Cor de fundo do Navbar */
  color: #fff; /* Cor do texto */
`;

// Estilos para o logo
export const Logo = styled.span`
  font-size: 20px; /* Tamanho da fonte */
`;

// Container do usuário
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Estilos para a imagem do usuário
export const UserImage = styled.img`
  width: 30px; /* Largura da imagem */
  height: 30px; /* Altura da imagem */
  border-radius: 50%; /* Borda arredondada */
  margin-right: 10px; /* Espaçamento à direita */
`;

// Estilos para o nome do usuário
export const UserName = styled.span`
  font-size: 14px; /* Tamanho da fonte */
  margin-right: 10px; /* Espaçamento à direita */
`;

// Estilos para o botão de logout
export const LogoutButton = styled.button`
  background-color: transparent; /* Cor de fundo transparente */
  border: none; /* Sem borda */
  color: #fff; /* Cor do texto */
  cursor: pointer; /* Cursor do mouse */
  font-size: 14px; /* Tamanho da fonte */
  transition: color 0.3s ease; /* Transição suave de cor */

  &:hover {
    color: #ddd; /* Cor do texto ao passar o mouse */
  }
`;
