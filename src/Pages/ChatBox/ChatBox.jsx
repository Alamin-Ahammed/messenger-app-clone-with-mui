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

const messeges = [
  // {
  //   user: true,
  //   text: "Assalamuwalaikum",
  // },
  // { text: "walaikumussalam" },
  // {
  //   user: true,
  //   text: "What are you doing?",
  // },
  // { text: "Nothing" },
  // {
  //   user: true,
  //   text: "I'm doing my work",
  // },
  // {
  //   user: true,
  //   text: "Assalamuwalaikum",
  // },
  // { text: "walaikumussalam" },
  // {
  //   user: true,
  //   text: "What are you doing?",
  // },
  // { text: "Nothing" },
  // {
  //   user: true,
  //   text: "I'm doing my work",
  // },
  // { text: "walaikumussalam" },
  // {
  //   user: true,
  //   text: "What are you doing?",
  // },
  // { text: "Nothing" },
  // {
  //   text: "I'm doing my work too now",
  // },
];

/* Here profiles of friends lists will come from database it's also used in FriendLists component to show the friend list in UI */
const profiles = [1];

export default function ChatBox() {
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
            <ChatBoxHeader NavbarMenuListIcons={NavbarMenuListIcons} />

            <ChatBoxBody messeges={messeges} />

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
