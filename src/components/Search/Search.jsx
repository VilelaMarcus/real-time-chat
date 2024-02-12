import { useState } from "react";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../../db.js";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [err, setErr] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const handleSearch = async () => {
    if (searchTerm.trim() === "") return;

    const q = query(
      collection(db, "User"),
      where("displayName", "==", searchTerm)
    );

    try {
      const querySnapshot = await getDocs(q);
      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSearchResults(results);
      setErr(false);
    } catch (error) {
      setSearchResults([]);
      setErr(true);
    }
  };

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
      console.error("Erro ao selecionar usuário:", error);
    }
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {err && <span>User not found!</span>}
      {searchResults.map((user) => (
        <div
          key={user.id}
          className="userChat"
          onClick={() => handleSelectUser(user)}
        >
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;