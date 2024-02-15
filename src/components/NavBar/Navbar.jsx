import {signOut} from "firebase/auth"
import { auth } from '../../db.js'
import { useSelector } from "react-redux"
import { NavbarContainer,  UserContainer, UserImage, UserName, LogoutButton } from './Navbar.styles';

import SettingsIcon from '@mui/icons-material/Settings';
import avatarUrl from '../../assets/images/default-avatar.png';
import { useDispatch } from "react-redux"
import { actions } from "../../redux/slices/userSlice.js";
import { Link } from 'react-router-dom';

const Navbar = () => {  
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();

  console.log({currentUser});

  const handlerLogout = async () => {
    try {
      console.log("Logout");
      await signOut(auth);
      dispatch(actions.logout());
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }


  return (
    <NavbarContainer>
      <UserContainer>
        <UserImage src={currentUser.image || avatarUrl} alt="User" />
        <UserName>{currentUser.displayName}</UserName>
      </UserContainer>
      <div style={{color: "white"}}>
        <SettingsIcon />
      </div>                
    </NavbarContainer>
  );
};

export default Navbar;
