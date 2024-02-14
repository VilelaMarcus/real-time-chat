export const getOtherUserName = (chatName, currentUserDisplayName) => {
    const [user1, user2] = chatName.split(" - ");
    return user1 === currentUserDisplayName ? user2 : user1;
  };