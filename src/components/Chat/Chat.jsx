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

import avatarUrl from '../../assets/images/default-avatar.png';
import { db, storage } from "../../db.js";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getOtherUserName } from '../../utils/parseName.js';

const Chat = () => {
  const {
     chatId,
      ChatName,
      image,
      chatType,
      images
  }= useSelector((state) => state.chat);
  const currentUser = useSelector(state => state.user.currentUser);
  const [messageText, setMessageText] = useState('');
  const [img, setImg] = useState(null);

  const otherUserId = Object.keys(images).find(id => id !== currentUser.id);
  const imageToDisplay = images[otherUserId] !== null ? images[otherUserId] : avatarUrl;


  console.log({images})
  console.log(currentUser.id)
  console.log(images[currentUser.id])
  console.log({imageToDisplay})

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend();
    }
  };

  const handleMessageSend = async () => {

    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "Chat", chatId), {
              messages: arrayUnion({
                id: uuid(),
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
          chatId: chatId,
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


    await updateDoc(doc(db, "Chat", chatId), {
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
      {chatId === '' ? (
        <div>Envie e receba mensagens no melhor aplicativo de mensagens online</div>
      ) : (
        <>
          <ChatHeader>
            {/* Exibir a imagem e o nome do outro usuário */}
            <img src={imageToDisplay} alt="Profile" />
            <span>{getOtherUserName(ChatName, currentUser.displayName)}</span>
          </ChatHeader>
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
