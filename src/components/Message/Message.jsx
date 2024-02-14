import { useEffect, useRef } from "react";
import { MessageContainer, MessageT, MessageText, MessageTime } from './Message.styles';

import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isSender = message.senderId === currentUser.id;
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // Converter timestamp para uma string de data formatada
  const formattedTime = new Date(message.time.seconds * 1000).toLocaleString();

  return (
    <MessageContainer isSender={isSender}>
      <MessageT isSender={isSender}>
        <MessageText>{message.text}</MessageText>
        <MessageTime>{formattedTime}</MessageTime>
      </MessageT>
    </MessageContainer>
  );
};

export default Message;