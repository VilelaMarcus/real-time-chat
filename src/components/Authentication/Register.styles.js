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

// const Input = styled.input`
//   display: none;
// `;

// const Icon = styled.img`
//   color: var(--accent-900);
//   width: ${rem(40)};
//   padding: ${rem(10)};
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

export {
  RegisterContent,
  // Image,
  // InputStatus,
  // Input,
  // Icon,
  // CoverPhoto
};

