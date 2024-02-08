import { useState } from "react";
import TextField from '@mui/material/TextField';
import avatarUrl from '../../assets/images/default-avatar.png';
import { IconYellow } from '../../assets/Icons/edit-icon.jsx';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../db.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

import {   
    FormContainer, 
    ProfileImage, 
    RegisterButton, 
    RegisterContent, 
    ImgContainer, 
    SubTitle, 
    Title, 
    ImageOverlay,
    InputStyleForm, 
    ProfileImageWrapper,
    IconWrapper,
    Input2
} from "./Register.styles.js";
import { toBase64 } from "../../utils/to-base64.JS";


const Register = () => {
    const [err, setErr] = useState(false);
    const [file, setFile] = useState({});
    const [loading, setLoading] = useState(false);
    const [logoUrl, setLogoUrl] = useState();

    const handleSubmit = async (e) => {   
    // setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmedPassword = e.target[3].value;

    console.log(displayName, email, password, confirmedPassword);

    try {
    
        const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
        
        console.log(res.user);
        console.log('res.user');

        await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
            //Update profile
            await updateProfile(res.user, {
                name: displayName,
                photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, "User", res.user.uid), {
                Id: res.user.uid,
                name: displayName,
                email,
                image: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
        } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
        }
        });
    });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
};

    const [isHovered, setIsHovered] = useState(true);

    const handleSelectLogo = async event => {
        console.log('file');
        console.log(event.currentTarget.files);
      if (event.currentTarget.files?.[0]) {

        const file = event.currentTarget.files[0];

        
        const base64Logo = (await toBase64(
            event?.currentTarget?.files[0],
          ));
  
          setLogoUrl(base64Logo);
        console.log(file);
        setFile(file);
      }
    };

    return (
        <RegisterContent>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Registrar Usuario</Title>  
                <SubTitle>Converse e conecte-se em tempo real</SubTitle>  
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
                <TextField 
                    label="Nome de Usuario" 
                    variant="filled" 
                    required
                    style={InputStyleForm} 
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        input: { color: 'white' }
                    }}
                />
                <TextField 
                    label="Email" 
                    required
                    variant="filled" 
                    style={InputStyleForm} 
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        input: { color: 'white' }
                    }}
                />
                <TextField 
                    label="Senha" 
                    variant="filled" 
                    required
                    style={InputStyleForm} 
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        input: { color: 'white' }
                    }}
                />
                <TextField 
                    label="Confirmar Senha" 
                    variant="filled" 
                    required
                    style={InputStyleForm} 
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        input: { color: 'white' }
                    }}
                />
                <RegisterButton type="submit">Registrar</RegisterButton>
            </FormContainer>
        </RegisterContent>
    );
};

export default Register;