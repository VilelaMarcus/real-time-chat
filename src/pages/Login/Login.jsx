import  { useState } from "react";
import TextField from '@mui/material/TextField';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../db.js";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };

    return (
        <RegisterContent>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Bem Vindo 👋</Title>  
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

export default Login;