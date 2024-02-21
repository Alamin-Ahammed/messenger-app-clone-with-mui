import { createContext, useContext, useState } from "react";
import { useUsersAllFriendsData } from "../UsersAllFriendsData/UsersAllFriendsData";

const ConversationHolder = createContext();
export const CurrentConversationProvider = ({ children }) => {
  const {usersAllFriendsData} = useUsersAllFriendsData();
  const [currentConversation, setCurrentConversation] = useState(usersAllFriendsData);

  return (
    <ConversationHolder.Provider
      value={{ currentConversation, setCurrentConversation }}
    >
      {children}
    </ConversationHolder.Provider>
  );
};

export const useCurrentConversationProvider = () => {
  const { currentConversation, setCurrentConversation } =
    useContext(ConversationHolder);
  return { currentConversation, setCurrentConversation };
};
