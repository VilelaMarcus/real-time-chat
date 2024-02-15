import { useState } from "react";

import { auth, db, storage } from "../../db.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc, } from "firebase/firestore";
import {signOut} from "firebase/auth"

import { ProfileLabel, LogoutButton } from './SettingsModal.styles'; // Importando os estilos definidos
import { IconYellow } from '../../assets/Icons/edit-icon.jsx';
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../redux/slices/userSlice.js";

import { toBase64 } from "../../utils/to-base64";
import avatarUrl from '../../assets/images/default-avatar.png';

import {  
    ProfileImage, 
    ImgContainer, 
    ImageOverlay,
    ProfileImageWrapper,
    IconWrapper,
    Input2      
} from "../../pages/Register/Register.styles.js";

import { 
    ModalBackdrop, 
    ModalContainer, 
    ModalCloseButton, 
    ModalHeader, 
    ModalTitle,
    ButtonContainer,
    SaveButton
} from './SettingsModal.styles'

// eslint-disable-next-line react/prop-types
const SettingsModal = ({ isOpen, onClose }) => {    
    
    const currentUser = useSelector(state => state.user.currentUser);
    const [logoUrl, setLogoUrl] = useState();
    const [file, setFile] = useState();    
    const [isHovered, setIsHovered] = useState(true);
    const dispatch = useDispatch();

    if (!isOpen) return null;
    

    const handlerLogout = async () => {
        try {
        console.log("Logout");
        await signOut(auth);
        dispatch(actions.logout());
        } catch (error) {
        console.error("Erro ao fazer logout:", error);
        }
    }

    const handleSelectLogo = async event => {
        if (event.currentTarget.files?.[0]) {
            const file = event.currentTarget.files[0];        
            const base64Logo = (await toBase64(
                event?.currentTarget?.files[0],
            ));
            setLogoUrl(base64Logo);
            setFile(file);
        } 
    };



    const handleSave = async () => {
        const date = new Date().getTime();
        const storageRef = ref(storage, `${currentUser.displayName + date}`);

        await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
            //Update profile
            await updateDoc(doc(db, "User", currentUser.id), {
                [ "image"]:  downloadURL     
            });
    
            dispatch(actions.login({...currentUser, image: downloadURL}))
        } catch (err) {
            console.log(err);
        }
        });
    });
}
    

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
                <ModalTitle>Configurações do Usuario</ModalTitle>
                <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
            </ModalHeader>
            <ProfileLabel>Alterar foto de perfil:</ProfileLabel>
            <ProfileImageWrapper >
                    <ImgContainer
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}>
                        <ProfileImage
                            alt={'user-profile:user-profile'}
                            src={logoUrl || avatarUrl}
                        />                    
                        {isHovered && (
                            <ImageOverlay>
                                <IconWrapper>
                                    <IconYellow />
                                    <Input2
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        onChange={handleSelectLogo}
                                    />
                                </IconWrapper>
                            </ImageOverlay>
                        )}
                    </ImgContainer>
                </ProfileImageWrapper>
                <ButtonContainer>
                    <SaveButton  onClick={handleSave}>Salvar Alteracões</SaveButton>
                    <LogoutButton onClick={handlerLogout}>Logout</LogoutButton>
                </ButtonContainer>
            
          </ModalContainer>
        </ModalBackdrop>
      );
    };
    
    export default SettingsModal;