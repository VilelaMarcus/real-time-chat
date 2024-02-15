import { useState, useEffect } from "react";
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

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(searchTerm.trim()); // Convert search term to lowercase
    }, 300);

    return () => clearTimeout(debounceTimer); // Cleanup timer on unmount or when searchTerm changes
  }, [searchTerm]);

  const handleSearch = async (text) => {
    if (text.trim() === "") {
      setSearchResults([]);
      return;
    }
  
    try {
      const querySnapshot = await getDocs(collection(db, "User"));
      const allUsers = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      // Filtrar os usuários cujo displayName contém o texto de pesquisa fornecido
      const filteredUsers = allUsers.filter((user) =>
        user.displayName.toLowerCase().includes(text.toLowerCase())
      );
  
      setSearchResults(filteredUsers);
      setErr(false);
    } catch (error) {
      console.error("Error searching users:", error);
      setSearchResults([]);
      setErr(true);
    }
  };

  const handleSelectUser = async (selectedUser) => {
    try {
    
      const userIds = [currentUser.id, selectedUser.id].sort(); // Ordena os IDs de usuário
      const combinedId = userIds.join('-'); 

      const chatDocRef = doc(db, "Chat", combinedId);
      const chatDocSnap = await getDoc(chatDocRef);

      if (!chatDocSnap.exists()) {
        const newChatData = {
          AdminId: currentUser.id,
          adminName: currentUser.displayName,
          chatType: "private",
          id: combinedId,
          members: [currentUser.id, selectedUser.id],
          name: `${selectedUser.displayName} - ${currentUser.displayName}`,
          lastMessage: "", 
          images: {
            [currentUser.id]: currentUser.image, // Salvar a imagem do usuário atual
            [selectedUser.id]: selectedUser.image, // Salvar a imagem do usuário selecionado
          },
        };
  
        const payload = {
          chatId: combinedId,
          ChatName: newChatData.name,
          images: newChatData.images,
          image: '',
          chatType: newChatData.chatType,
        };  
        
        //create user on firestore
        await setDoc(doc(db, "Chat", combinedId),
          newChatData
        );         

        dispatch(actions.setChat(payload));        
      }
      else {
        dispatch(actions.setChat({ 
          chatId: combinedId,
          ChatName: chatDocSnap.data().name,
          images: chatDocSnap.data().images,
          image: chatDocSnap.data().image,
          chatType: chatDocSnap.data().chatType,
        }));
      }
    
      setSearchTerm("");

    } catch (error) {
      console.error("Error selecting user:" , error);
    }
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchTerm(text);
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
