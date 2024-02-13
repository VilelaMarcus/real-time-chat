import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../db.js";
import { useSelector } from "react-redux";
import { ChatsContainer, ChatItem, CenteredContainer } from './Chats.styles';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleSelectUser = async (selectedUser) => {
    try {
      const combinedId =
        currentUser.uid > selectedUser.id
          ? `${currentUser.uid}-${selectedUser.id}`
          : `${selectedUser.id}-${currentUser.uid}`;
  
      const chatDoc = doc(db, "Chat", combinedId);
      const chatDocSnap = await chatDoc.get();
  
      if (!chatDocSnap.exists()) {
        await chatDoc.set({ messages: [] });
      }
  
      // Adicione a lógica para atualizar as conversas do usuário aqui
    } catch (error) {
      console.error("Error selecting user:", error);
    }
  };



  useEffect(() => {
    const getChats = async () => {
      try {
        const unsub = onSnapshot(doc(db, "Chats", currentUser.Id), (doc) => {
          setChats(doc.data());
          setLoading(false);
        });

        return unsub;
      } catch (error) {
        console.error("Error fetching chats:", error);
        setLoading(false);
      }
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  if (loading) {
    return (
      <CenteredContainer>
        <div>Loading...</div>
      </CenteredContainer>
    );
  }
  
  // Se não houver chats, retorne uma mensagem informando
  if (Object.keys(chats).length === 0) {
    return (
      <CenteredContainer>
        <div>No chats available.</div>
      </CenteredContainer>
    );
  }

  return (
    <ChatsContainer>
      {Object.entries(chats)
        .sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <ChatItem key={chat[0]} onClick={() => handleSelectUser(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].lastMessage?.text}</p>
            </div>
          </ChatItem>
        ))}
    </ChatsContainer>
  );
};

export default Chats;
