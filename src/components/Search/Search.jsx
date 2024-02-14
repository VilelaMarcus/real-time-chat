import { useState } from "react";
import { collection, query, where, getDoc, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../db.js";
import { useSelector, useDispatch } from "react-redux";
import { SearchResultItem, SearchContainer, SearchInput, SearchResultContainer } from "./Search.styles"; // Import SearchResultContainer style

import { actions } from "../../redux/slices/chatsSlice.js";

import avatarUrl from '../../assets/images/default-avatar.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [err, setErr] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  let debounceTimer;

  const debounceSearch = (text) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      handleSearch(text); // Convert search term to lowercase
    }, 300);
  };

  const handleSearch = async (text) => {
    if (text.trim() === "") {
      setSearchResults([]);
      return;
    }

    const q = query(
      collection(db, "User"),
      where("displayName", ">=", text) // Perform case-insensitive search
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
    console.log("Selected usexxr:", selectedUser);
    try {
  
      const combinedId =
        currentUser.uid > selectedUser.id
          ? `${currentUser.id}-${selectedUser.id}`
          : `${selectedUser.id}-${currentUser.id}`;

    const chatDocRef = doc(db, "Chat", combinedId);
    const chatDocSnap = await getDoc(chatDocRef);

    

    console.log("Chat doc snap:", chatDocSnap);

      if (!chatDocSnap.exists()) {

        const newChatData = {
          AdminId: currentUser.id,
          adminName: currentUser.displayName,
          chatType: "private",
          id: combinedId,
          members: [currentUser.id, selectedUser.id],
          name: `${selectedUser.displayName}`,
          lastMessage: "", 
        };

        //create user on firestore
        await setDoc(doc(db, "Chat", combinedId),
          newChatData
        );         

        dispatch(actions.setChat({ chatId: combinedId, ChatName: newChatData.name }));
      }
      else {
        dispatch(actions.setChat({ chatId: combinedId, ChatName: chatDocSnap.data().name }));
      }
    
    } catch (error) {
      console.error("Error selecting user:" , error);
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
        placeholder="Procure por um usuário..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchResults.length > 0 && ( // Only render if there are search results
        <SearchResultContainer> {/* Use SearchResultContainer style */}
          {searchResults.map((user) => (
            <SearchResultItem
              key={user.id}
              className="userChat"
              onClick={() => handleSelectUser(user)}
            >
              <img src={user.image || avatarUrl} alt="" className="userAvatar" style={{ width: "40px", height: "40px" }} /> {/* Adjust the size */}
              <div className="userChatInfo">
                <span>{user.displayName}</span>
              </div>
            </SearchResultItem>
          ))}
        </SearchResultContainer>
      )}
      {err && <span>User not found!</span>}
    </SearchContainer>
  );
};

export default Search;
