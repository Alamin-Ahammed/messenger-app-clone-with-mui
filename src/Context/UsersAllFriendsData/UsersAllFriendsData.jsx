import { createContext, useContext, useState } from "react";

const UsersAllFriendsDataContext = createContext();
export const UsersAllFriendsDataProvider = ({ children }) => {
  const [usersAllFriendsData, setUsersAllFriendsData] = useState([
    {
      profileData: {
        imageURL: "https://picsum.photos/200",
        profileName: "Alamin Ahammed",
        location: "North California",
        DateOfBirth: "24/03/2003",
      },
      messeges: [
        {
          currentUser: true,
          text: "Assalamuwalaikum",
        },
        { text: "walaikumussalam" },
        {
          currentUser: true,
          text: "What are you doing?",
        },
        { text: "Nothing" },
        {
          currentUser: true,
          text: "I'm doing my work",
        },
        {
          currentUser: true,
          text: "Assalamuwalaikum",
        },
        { text: "walaikumussalam" },
        {
          currentUser: true,
          text: "What are you doing?",
        },
        { text: "Nothing" },
        {
          currentUser: true,
          text: "I'm doing my work",
        },
        { text: "walaikumussalam" },
        {
          currentUser: true,
          text: "What are you doing?",
        },
        { text: "Nothing" },
        {
          text: "I'm doing my work too now",
        },
      ],
    },
  ]);

  return (
    <UsersAllFriendsDataContext.Provider
      value={{ usersAllFriendsData, setUsersAllFriendsData }}
    >
      {children}
    </UsersAllFriendsDataContext.Provider>
  );
};

export const useUsersAllFriendsData = () => {
  const { usersAllFriendsData, setUsersAllFriendsData } = useContext(
    UsersAllFriendsDataContext
  );
  return { usersAllFriendsData, setUsersAllFriendsData };
};
