import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { ChatContainer, ChatHeader, MessagesContainer, ChatInputContainer, ChatInput, SendMessageButton } from './Chat.styles';
import Messages from '../Messages/Messages';
import { useSelector } from 'react-redux';
import {
  arrayUnion,
  doc,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../db.js";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";



const Chat = () => {
  const chatInfo = useSelector((state) => state.chat);
  const currentUser = useSelector(state => state.user.currentUser);
  const [messageText, setMessageText] = useState('');
  const [img, setImg] = useState(null);

  // Função para lidar com a pressão da tecla Enter no campo de entrada
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  const handleMessageSend = async () => {
    console.log('Mensagem enviada:', messageText);


    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chatInfo.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.id,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {

        const newMessage = {
          id: uuid(),
          chatId: chatInfo.chatId,
          contenttype: "text",
          file: "",
          senderId: currentUser.id,
          text: messageText,
          time: Timestamp.now(), 
        };

        //create user on firestore
        await setDoc(doc(db, "Message", newMessage.id),
          newMessage
        );         
    

    await updateDoc(doc(db, "Chat", chatInfo.chatId), {
      [ "lastMessage"]: {
        messageText,
      }
    });
    }
    setMessageText("");
    setImg(null);
  };


  return (
    <ChatContainer>
      {chatInfo.chatId === '' ? (
        <div>Envie e receba mensagens no melhor aplicativo de mensagens online</div>
      ) : (
        <>
          <ChatHeader>{chatInfo.ChatName}</ChatHeader>
          <MessagesContainer>
            <Messages />
          </MessagesContainer>
          <ChatInputContainer>
            <ChatInput
              type="text"
              placeholder="Digite sua mensagem..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <SendMessageButton onClick={handleMessageSend}>
              <SendIcon />
            </SendMessageButton>
          </ChatInputContainer>
        </>
      )}
    </ChatContainer>
  );
};

export default Chat;
