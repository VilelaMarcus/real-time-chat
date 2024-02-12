import {signOut} from "firebase/auth"
import { auth } from '../../db.js'
import { useSelector } from "react-redux"
import { NavbarContainer, Logo, UserContainer, UserImage, UserName, LogoutButton } from './Navbar.styles';

const Navbar = () => {  
  const currentUser = useSelector(state => state.user.currentUser);

  return (
    <NavbarContainer>
      <Logo>Foton Chat</Logo>
      <UserContainer>
        <UserImage src={currentUser.image} alt="User" />
        <UserName>{currentUser.name}</UserName>
        <LogoutButton onClick={() => signOut(auth)}>Logout</LogoutButton>
      </UserContainer>
    </NavbarContainer>
  );
};

export default Navbar;
