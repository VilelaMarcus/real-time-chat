import { useState } from 'react';
import { useSelector } from "react-redux"
import { NavbarContainer,  UserContainer, UserImage, UserName } from './Navbar.styles';

import SettingsModal from '../Settings/SettingsModal.jsx';
import SettingsIcon from '@mui/icons-material/Settings';
import avatarUrl from '../../assets/images/default-avatar.png';

const Navbar = () => {  
  const currentUser = useSelector(state => state.user.currentUser);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const handleOpenSettingsModal = () => {
    setIsSettingsModalOpen(true);
  };

  const handleCloseSettingsModal = () => {
    setIsSettingsModalOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <UserContainer>
          <UserImage src={currentUser.image || avatarUrl} alt="User" />
          <UserName>{currentUser.displayName}</UserName>
        </UserContainer>
        <div style={{color: "white", cursor: 'pointer' }} onClick={handleOpenSettingsModal}>
          <SettingsIcon />
        </div>                
      </NavbarContainer>
      <SettingsModal isOpen={isSettingsModalOpen} onClose={handleCloseSettingsModal} />
    </>    
  );
};

export default Navbar;
