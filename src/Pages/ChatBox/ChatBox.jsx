import ChatBoxHeader from "../../Components/ImpureComponents/ChatBoxHeader/ChatBoxHeader";
import ChatBoxBody from "../../Components/ImpureComponents/ChatBoxBody/ChatBoxBody";
import ChatBoxFooter from "../../Components/ImpureComponents/ChatBoxFooter/ChatBoxFooter";
import { Box, Container } from "@mui/material";
import AddSomeFriends from "../../Components/ImpureComponents/AddSomeFriends/AddSomeFriends";

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
  return (
    <>
      <Container disableGutters maxWidth="100%">
        {profiles.length > 0 ? (
          <Box
            sx={{
              bgcolor: "#fff",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ChatBoxHeader />

            <ChatBoxBody messeges={messeges} />

            <ChatBoxFooter />
          </Box>
        ) : (
          <AddSomeFriends />
        )}
      </Container>
    </>
  );
}
