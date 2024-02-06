import { 
    FormContainer, 
    ProfileImage, 
    RegisterButton, 
    RegisterContent, 
    ImgContainer, 
    SubTitle, 
    Title, 
    ImageOverlay, 
    ProfileImageWrapper,
    UploadHeading,
    Input,
    IconWrapper,
} from "./Register.styles";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import logoUrl from '../../assets/images/default-avatar.png';
import { IconYellow } from '../../assets/Icons/edit-icon.jsx';

const InputStyleForm = {
    backgroundColor: '#3e404b',
    color: 'white',
    fontFamily: 'Avenir',
    outline: 'none',
    border: 'none',
    borderRadius: '8px',
    width: '100%',
    marginBottom: '12px',
}


const Register = () => {
    const [isHovered, setIsHovered] = useState(true);


    const handleSelectLogo = async event => {
      if (event.currentTarget.files?.[0]) {
        const file = event.currentTarget.files[0];

        console.log(file);
      }
    };


    return (
        <RegisterContent>
            <FormContainer>
                <Title>Bem Vindo 👋</Title>  
                <UploadHeading>Upload </UploadHeading>
                <Input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleSelectLogo}
                />
                <SubTitle>Converse e conecte-se em tempo real</SubTitle>  
                <ProfileImageWrapper>
                    <ImgContainer
                    
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}>
                        <ProfileImage
                            alt={'user-profile:user-profile'}
                            src={logoUrl}
                        />                    
                        {isHovered && (
                            <ImageOverlay onClick={() => setShowImageModal(true)}>
                                <IconWrapper
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={handleSelectLogo}
                                >
                                    <IconYellow />
                                </IconWrapper>
                            </ImageOverlay>
                        )}
                    </ImgContainer>
                </ProfileImageWrapper>
                <TextField 
                    label="Usuario" 
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
                    style={InputStyleForm} 
                    sx={{
                        '& .MuiInputLabel-root': {
                            color: 'white',
                        },
                        input: { color: 'white' }
                    }}
                />
                <RegisterButton type="submit">Register</RegisterButton>
            </FormContainer>
        </RegisterContent>
    );
};

export default Register;