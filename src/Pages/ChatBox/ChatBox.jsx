import ChatBoxHeader from "../../Components/ImpureComponents/ChatBoxHeader/ChatBoxHeader";
import ChatBoxBody from "../../Components/ImpureComponents/ChatBoxBody/ChatBoxBody";
import ChatBoxFooter from "../../Components/ImpureComponents/ChatBoxFooter/ChatBoxFooter";
import { Box, Container } from "@mui/material";
import AddSomeFriends from "../../Components/ImpureComponents/AddSomeFriends/AddSomeFriends";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import ThreeDotsMenu from "../../Components/ThreeDotsMenu/ThreeDotsMenu";
import { useCurrentConversationProvider } from "../../Context/CurrentConversationProvider/CurrentConversationProvider";

export default function ChatBox() {
  /* Here profiles of friends lists will come from database it's also used in FriendLists component to show the friend list in UI */
  const { currentConversation: profiles } = useCurrentConversationProvider();
  // currentConversation has only one array always because it's the current friend whom is taking the user.
  const { profileData, messeges } = profiles[0];
  const [isThreeDotsMenuOpen, setIsThreeDotsMenuOpen] = useState(false);
  const handleCall = () => {
    console.log("call is clicked");
  };
  const handleVideoCall = () => {
    console.log("video call is clicked");
  };
  const handleThreeDotsMenu = () => {
    setIsThreeDotsMenuOpen(!isThreeDotsMenuOpen);
  };
  // These are constant icons for now, in future it may be get changed.
  const NavbarMenuListIcons = [
    { icon: <IoCall />, handler: handleCall },
    { icon: <IoVideocam />, handler: handleVideoCall },
    { icon: <BsThreeDots />, handler: handleThreeDotsMenu },
  ];
  return (
    <>
      <Container disableGutters maxWidth="100%" sx={{ display: "flex" }}>
        {profiles.length > 0 ? (
          <Box
            sx={{
              bgcolor: "#fff",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              flexGrow: 2,
            }}
          >
            {/*this ChatBoxHeader component always take an array as argument first arg is icon and second arg is handler function*/}
            <ChatBoxHeader
              NavbarMenuListIcons={NavbarMenuListIcons}
              profileData={profileData}
            />

            <ChatBoxBody messeges={messeges} profileData={profileData} />

            <ChatBoxFooter />
          </Box>
        ) : (
          <AddSomeFriends />
        )}
        {isThreeDotsMenuOpen && <ThreeDotsMenu />}
      </Container>
    </>
  );
}
