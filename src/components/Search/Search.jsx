import { useState } from "react";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../../db.js";
import { useSelector } from "react-redux";
import { SearchButton, SearchContainer, SearchInput } from "./Search.styles";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [err, setErr] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  let debounceTimer;

  console.log({ searchTerm });
  console.log({ searchResults });

  const debounceSearch = (text) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleSearch(text);
    }, 300); // Adjust the delay time as needed
  };

  const handleSearch = async (text) => {
    if (text.trim() === "") {
      setSearchResults([]);
      return;
    }

    const q = query(
      collection(db, "User"),
      where("name", ">=", text)
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
      console.error("Error searching users:", error);
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

      // Add logic to update user chats here
    } catch (error) {
      console.error("Error selecting user:", error);
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchTerm(text);
    debounceSearch(text);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Find a user"
        value={searchTerm}
        onChange={handleChange}
      />
      {err && <span>User not found!</span>}
      {searchResults.length > 0 && (
        <div className="searchResults">
          {searchResults.map((user) => (
            <div
              key={user.id}
              className="userChat"
              onClick={() => handleSelectUser(user)}
            >
              <img src={user.image} alt="" className="userAvatar" />
              <div className="userChatInfo">
                <span>{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </SearchContainer>
  );
};

export default Search;
