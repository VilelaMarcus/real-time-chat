import styled from '@emotion/styled';

const RegisterContent = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(75deg, rgb(20, 23, 33) 0%, rgb(20, 23, 33) 50%, rgba(20, 23, 33,0.8) 100%);
  /* Vertical center */
  display: table-cell;
  vertical-align: middle;
`;

// const Image = styled.img`
//   color: inherit;
// `;

// const InputStatus = styled.span`
//   color: ${props =>
//     props.isAvailable ? 'var(--primary-700)' : 'var(--red-800)'};
// `;

const InputForm = styled.input`
  background-color: #3e404b;
  color: white;
  font-family: "Avenir";
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 24px 18px 12px 18px;
  width: calc(100% - 18px - 18px);
  margin-bottom: 12px;
  `;


  const FormContainer = styled.div`
  width: 50%;
  max-width: 350px;
  padding: 0% 25% 0% 25%;
`;

const Title = styled.h1`
font-size: 42px; 
font-family: 'Avenir'; 
letter-spacing: 0.5px; 
color: #e8e8e8; 
padding-bottom: 12px; 
`;
  


const SubTitle = styled.h2`
font-size: 18px;
font-family: 'Avenir';
letter-spacing: 0.5px;
color: #afafaf;
padding-bottom: 24px;
`;


const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background: no-repeat center center;
`;



const RegisterButton = styled.button`
width: 100%;
height: 53px;
color: white;
background-color: #fa541c;
border: none;
outline: none;
border-radius: 8px;
font-family: "Avenir";
cursor: pointer;
transition: all .44s ease;
-webkit-transition: all .44s ease;
-moz-transition: all .44s ease;
`;


const LabelInput = styled.div`
position: absolute;
top: 8px;
left: 18px;
font-size: 11px;
color: rgb(175, 175, 175);
font-family: Avenir;
width: 100px;
`;

const ImgContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
`;

const ProfileImageWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;
  left: 35%;
`;

const IconWrapper = styled.label`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 15px;
`;

const Icon = styled.img`
  color: transparent;
  width: 25%;
  padding: 10px;
`;



export {
  RegisterContent,
  InputForm,
  LabelInput,
  RegisterButton,
  Title,
  SubTitle,
  ImgContainer,
  FormContainer,
  ProfileImageWrapper,
  ImageOverlay,
  ProfileImage,
  Icon,
  IconWrapper,
};

// const EmptyInnerContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   align-self: center;
// `;

// const EmptyTitle = styled.h2`
//   font-size: 1.125rem;
//   font-weight: bold;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.22;
//   letter-spacing: normal;
//   text-align: center;
//   color: #bdbebe; ;
// `;

// const EmptySubtitle = styled.p`
//   font-size: 1.125rem;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: italic;
//   line-height: 1.22;
//   letter-spacing: normal;
//   text-align: center;
//   color: #bdbebe;
//   margin-top: 1rem;
//   margin-bottom: ${rem(30)};
// `;

// const HeroSection = styled.div`
//   background: var(--grey-500);
//   padding: ${rem(30)};
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   justify-content: center;
//   align-items: center;
//   background: var(--white-200);
//   padding-bottom: ${rem(130)};
// `;

// const CoverPhoto = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin-top: ${rem(80)};
//   height: ${rem(200)};
//   background: url(${props => props.src}), var(--black-500);
//   background-size: cover;
//   background-position: center;
// `;