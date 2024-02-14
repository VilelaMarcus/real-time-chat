import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../db.js";
import Message from "../Message/Message.jsx";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const chatInfo = useSelector((state) => state.chat);

  useEffect(() => {
    const q = query(
      collection(db, "Message"),
      where("chatId", "==", chatInfo.chatId)
    );

    const unSub = onSnapshot(q, (snapshot) => {
      const messageData = [];
      snapshot.forEach((doc) => {
        messageData.push(doc.data());
      });
      setMessages(messageData);
    });

    return () => {
      unSub();
    };
  }, [chatInfo.chatId]);

  console.log(messages);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
