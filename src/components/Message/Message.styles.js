import styled from 'styled-components';


export const MessageContainer = styled.div`
  display: flex;
  justify-content: ${props => props.isSender ? 'flex-end' : 'flex-start'};
  margin-bottom: 10px;
`;

export const MessageT = styled.div`
  background-color: ${props => props.isSender ? '#DCF8C6' : '#E6E6E6'};
  color: ${props => props.isSender ? '#000000' : '#333333'};
  border-radius: 10px;
  padding: 10px;
  max-width: 70%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const MessageText = styled.p`
  margin: 0;
`;

export const MessageTime = styled.span`
  font-size: 12px;
  color: #999999;
`;
