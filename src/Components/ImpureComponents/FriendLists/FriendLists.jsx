import { Box, IconButton, Typography } from "@mui/material";
import { RiEditBoxLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import MenuIcon from "../../MenuIcon/MenuIcon";
import TextField from "../../CustomComponents/TextFeild/TextField/TextField";
import ProfileCard from "../../ProfileCard/ProfileCard";
import OutletHeadingWithIcon from "../../CustomComponents/OutletHeadingWithIcon/OutletHeadingWithIcon";
import { useCurrentConversationProvider } from "../../../Context/CurrentConversationProvider/CurrentConversationProvider";
import { useUsersAllFriendsData } from "../../../Context/UsersAllFriendsData/UsersAllFriendsData";

/* Here profiles of friends lists will come from database it's also used in ChatBox component to show AddSomeFriends component remember to change there */
// const profiles = [
//   {
//     profileData: {
//       imageURL: "https://picsum.photos/200",
//       profileName: "Alamin Ahammed",
//       location: "North California",
//       DateOfBirth: "24/03/2003",
//     },
//     messeges: [
//       {
//         currentUser: true,
//         text: "Assalamuwalaikum",
//       },
//       { text: "walaikumussalam" },
//       {
//         currentUser: true,
//         text: "What are you doing?",
//       },
//       { text: "Nothing" },
//       {
//         currentUser: true,
//         text: "I'm doing my work",
//       },
//       {
//         currentUser: true,
//         text: "Assalamuwalaikum",
//       },
//       { text: "walaikumussalam" },
//       {
//         currentUser: true,
//         text: "What are you doing?",
//       },
//       { text: "Nothing" },
//       {
//         currentUser: true,
//         text: "I'm doing my work",
//       },
//       { text: "walaikumussalam" },
//       {
//         currentUser: true,
//         text: "What are you doing?",
//       },
//       { text: "Nothing" },
//       {
//         text: "I'm doing my work too now",
//       },
//     ],
//   },
//   {
//     profileData: {
//       imageURL: "https://picsum.photos/200",
//       profileName: "Aisa Tabassum",
//       location: "Dhaka",
//       DateOfBirth: "15/11/2000",
//     },
//     messeges: [],
//   },
//   {
//     profileData: {
//       imageURL: "https://picsum.photos/200",
//       profileName: "Samana Khan",
//       location: "Dhaka",
//       DateOfBirth: "10/01/1998",
//     },
//     messeges: [
//       {
//         currentUser: true,
//         text: "Assalamuwalaikum",
//       },
//       { text: "walaikumussalam" },
//       {
//         currentUser: true,
//         text: "What are you doing?",
//       },
//       { text: "Nothing" },
//       {
//         currentUser: true,
//         text: "I'm doing my work",
//       },
//       {
//         currentUser: true,
//         text: "Assalamuwalaikum",
//       },
//       { text: "walaikumussalam" },
//       {
//         currentUser: true,
//         text: "What are you doing?",
//       },
//       { text: "Nothing" },
//       {
//         currentUser: true,
//         text: "I'm doing my work",
//       },
//       { text: "walaikumussalam" },
//       {
//         currentUser: true,
//         text: "What are you doing?",
//       },
//       { text: "Nothing" },
//       {
//         text: "01 go baby.",
//       },
//     ],
//   },
// ];

export default function FriendLists() {
  const { usersAllFriendsData: profiles } = useUsersAllFriendsData();
  const { setCurrentConversation } = useCurrentConversationProvider();
  const handleSetCurrentConversation = (profile) => {
    setCurrentConversation([profile]);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <OutletHeadingWithIcon
          headingText="Chats"
          icon={
            <RiEditBoxLine
              style={{
                color: "black",
                fontSize: "1.35rem",
              }}
            />
          }
        />

        <Box sx={{ paddingInline: "1rem", pb: "1rem" }}>
          <TextField
            data={{
              leftIcon: <IoSearch />,
              type: "text",
              placeholder: "Search Messenger",
              styles: {
                width: "100%",
                borderRadius: "1rem",
                border: "1px solid #ccc",
                background: "#F3F3F5",
                opacity: "0.8",
              },
            }}
          />
        </Box>

        <Box sx={{ py: "0.5rem", height: "inherit", overflow: "auto" }}>
          {profiles.map((profile, index) => (
            <Box
              key={profile.profileData.profileName || index}
              onClick={() => handleSetCurrentConversation(profile)}
            >
              <ProfileCard
                data={{
                  // here image,title,subheader will come from database
                  image: <img src={profile.profileData.imageURL} />,
                  action: (
                    <IconButton
                      id="profile-card-action-button"
                      aria-label="settings"
                    >
                      <BsThreeDots id="profile-card-action-button-svg" />
                    </IconButton>
                  ),
                  title: profile.profileData.profileName,
                  subheader:
                    profile.messeges.length > 0
                      ? profile.messeges[profile.messeges.length - 1].text
                      : "Your are now connected",
                }}
                active={"sm"}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
