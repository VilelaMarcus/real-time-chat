import  { useState } from "react";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import { useDispatch } from "react-redux"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../db.js";

import { actions } from "../../redux/slices/userSlice.js";
import {   
    FormContainer, 
    RegisterButton, 
    RegisterContent,  
    SubTitle, 
    Title, 
    InputStyleForm, 
} from "./Login.styles.js";


const Login = () => {
    const [err, setErr] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if(user){
        dispatch(actions.Login(user))
      }
    } catch (err) {
      setErr(true);
    }
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
                <RegisterButton type="submit">Entrar</RegisterButton>                 {/* Text below button with link to Register page */}
                 <p style={{ color: 'white', marginTop: '10px', fontSize: '1.5vh' }}>Não tem uma conta? <Link to="/register" style={{ color: 'white', textDecoration: 'underline' }}>Cadastre-se</Link></p>
           
            </FormContainer>
        </RegisterContent>
    );
};

export default Login;