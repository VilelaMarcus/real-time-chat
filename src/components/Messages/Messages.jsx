import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../db.js";
import Message from "../Message/Message.jsx";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const chatInfo = useSelector((state) => state.chat);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "Message"),
      where("chatId", "==", chatInfo.chatId)
    );
  
    const unSub = onSnapshot(q, (snapshot) => {
      const messageData = [];
      snapshot.forEach((doc) => {
        messageData.push({ id: doc.id, ...doc.data() });
      });
      
      const sortedMessages = messageData.slice().sort((a, b) => {
        const timeA = a.time;
        const timeB = b.time;
      
        console.log({timeA, timeB})
        console.log(timeA.seconds)
        console.log(timeB.nanoseconds)
        // Comparação dos segundos
        if (timeA.seconds !== timeB.seconds) {
          return timeA.seconds - timeB.seconds;
        }
      
        // Se os segundos forem iguais, comparação dos nanossegundos
        return timeA.nanoseconds - timeB.nanoseconds;
      });


      console.log({sortedMessages})
      setMessages(sortedMessages);
    });
  
    return () => {
      unSub();
    };
  }, [chatInfo.chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  console.log({messages})

  return (
    <div className="messages-container">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
