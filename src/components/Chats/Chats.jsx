import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../db.js";
import { ChatsContainer, ChatItem, CenteredContainer, UserImage, ChatInfo, UserName, LastMessage } from "./Chats.styles";
import { getOtherUserName } from "../../utils/parseName.js";
import { actions } from "../../redux/slices/chatsSlice.js";

import avatarUrl from '../../assets/images/default-avatar.png';

const Chats = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChats = async () => {
      if (currentUser) {
        try {
          const chatsRef = collection(db, "Chat");
          const q = query(chatsRef, where("members", "array-contains", currentUser.id));
          const unsubscribe = onSnapshot(q, (snapshot) => {
            const chatsData = [];
            snapshot.forEach((doc) => {
              chatsData.push({ id: doc.id, ...doc.data() });
            });
            setChats(chatsData);
            setLoading(false);
          });
          return unsubscribe;
        } catch (error) {
          console.error("Error fetching chats:", error);
          setLoading(false);
        }
      }
    };

    currentUser && fetchChats();
  }, [currentUser]);

  if (loading) {
    return (
      <CenteredContainer>
        <div>Loading...</div>
      </CenteredContainer>
    );
  }

  if (chats.length === 0) {
    return (
      <CenteredContainer>
        <h3>Voce ainda nao tem nenhum chat</h3>
      </CenteredContainer>
    );
  }


  console.log({chats})

const handleSelectUser = (chat) => {  
  const payload = {
    chatId: chat.id,
    ChatName: chat.name,
    image: chat.image,
    chatType: chat.chatType,
    images : chat.images
  }
  dispatch(actions.setChat(payload));
  }


  return (
    <ChatsContainer>
      {chats
        .sort((a, b) => b.date - a.date)
        .map((chat) => (
          chat.lastMessage && <ChatItem key={chat.id} onClick={() => handleSelectUser(chat)}>
            <UserImage src={chat.images[currentUser.id === chat.members[0] ? chat.members[1] : chat.members[0]] || avatarUrl} alt="" />
            <ChatInfo>
              <UserName>{getOtherUserName(chat.name, currentUser.displayName)}</UserName>
              <LastMessage>{chat.lastMessage}</LastMessage>
            </ChatInfo>
          </ChatItem>
        ))}
    </ChatsContainer>
  );
};

export default Chats;
