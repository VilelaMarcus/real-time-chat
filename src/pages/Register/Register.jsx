import { useState } from "react";
import TextField from '@mui/material/TextField';
import logoUrl from '../../assets/images/default-avatar.png';
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


const Register = () => {
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmedPassword = e.target[3].value;

    console.log(displayName, email, password, confirmedPassword);

    const res = await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
    })


    // try {
      //Create user

    //   //Create a unique image name
    //   const date = new Date().getTime();
    //   const storageRef = ref(storage, `${displayName + date}`);

    //   await uploadBytesResumable(storageRef, file).then(() => {
    //     getDownloadURL(storageRef).then(async (downloadURL) => {
    //       try {
    //         //Update profile
    //         await updateProfile(res.user, {
    //           displayName,
    //           photoURL: downloadURL,
    //         });
    //         //create user on firestore
    //         await setDoc(doc(db, "users", res.user.uid), {
    //           uid: res.user.uid,
    //           displayName,
    //           email,
    //           photoURL: downloadURL,
    //         });

    //         //create empty user chats on firestore
    //         await setDoc(doc(db, "userChats", res.user.uid), {});
    //         navigate("/");
    //       } catch (err) {
    //         console.log(err);
    //         setErr(true);
    //         setLoading(false);
    //       }
    //     });
    //   });
    // } catch (err) {
    //   setErr(true);
    //   setLoading(false);
    // }
  };

    const [isHovered, setIsHovered] = useState(true);

    const handleSelectLogo = async event => {
      if (event.currentTarget.files?.[0]) {

        const file = event.currentTarget.files[0];
        console.log(file);
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
                            src={logoUrl}
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