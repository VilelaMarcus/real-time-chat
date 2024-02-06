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
    Icon,
    IconWrapper,
} from "./Register.styles";
import TextField from '@mui/material/TextField';
import logoUrl from './default-avatar.png';

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
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   const { value } = e.target[0];
    //   props.onAuth({ username: value, secret: value });
    // };

  
    return (
    <RegisterContent>
        <FormContainer>
            <Title>Bem Vindo 👋</Title>  
            <SubTitle>Converse e conecte-se em tempo real</SubTitle>  
            <ProfileImageWrapper>
                <ImgContainer>
                    <ProfileImage
                        onClick={() => console.log('click')}
                        alt={'user-profile:user-profile'}
                        src={logoUrl}
                    />                    
                    <ImageOverlay onClick={() => console.log('click2')}>
                        <IconWrapper>
                            <Icon
                            alt={'user-profile:edit'}
                            src="/images/icons/icn-edit-yellow.svg"
                            />
                        </IconWrapper>
                    </ImageOverlay>                
                </ImgContainer>
            </ProfileImageWrapper>
            <TextField 
                label="Nome" 
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
                label="Status" 
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