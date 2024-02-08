import { useState } from "react";
import TextField from '@mui/material/TextField';
import logoUrl from '../../assets/images/default-avatar.png';
import { IconYellow } from '../../assets/Icons/edit-icon.jsx';
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../../db.js";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
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
} from "./Login.styles.js";


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

    // try {
    //   //Create user
    //   const res = await createUserWithEmailAndPassword(auth, email, password);

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

    return (
        <RegisterContent>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Bem Vindo 👋</Title>  
                <SubTitle>Converse e conecte-se em tempo real</SubTitle>  
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
                <RegisterButton type="submit">Entrar</RegisterButton>
            </FormContainer>
        </RegisterContent>
    );
};

export default Register;