import styled from 'styled-components';
import { rem } from 'polished';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`

  background-color: white;
  border-radius: 8px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333; 
  gap: 50px;
  margin-bottom: 20px;
  padding: 10px;
`;


export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666; /* Cor cinza */
`;

export const ImgContainer = styled.div`
  margin-bottom: 20px;
`;
export const ImageOverlay = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
`;

export const ProfileImageWrapper = styled.div`
  margin-top: ${rem(-35)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

`;

export const ProfileImage = styled.img`
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
  width: ${props => (props.isSmall ? rem(90) : rem(150))};
  height: ${props => (props.isSmall ? rem(100) : rem(150))};
  box-shadow: 3px 3px 3px 3px #ccc;
   -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: no-repeat center center;
    

`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input2 = styled.input`
  display: none;
`;

export const LogoutButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ModalTitle = styled.h2`
  color: #fff;
  
  padding-left: 20px;
  padding-right: 20px;
  padding: 10px;
`;

export const ProfileLabel = styled.label`
  color:  #333; 
  font-size: 15px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const LogoutButton = styled.button`    
  background-color: #d9534f; 
  
  color: #fff;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c9302c; /* Cor de fundo alterada ao passar o mouse */
  }
`;

export const SaveButton = styled.button`    
  background-color: #30E391; 
  
  color: #fff;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  margin : 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
   background-color: #30E391; 
  }
`;

export const ButtonContainer = styled.div`    
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;