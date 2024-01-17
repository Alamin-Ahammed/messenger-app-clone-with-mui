import { Container } from "@mui/material";
import FriendLists from "../../Components/ImpureComponents/FriendLists/FriendLists";

export default function ChatListsBox() {
  return (
    <>
        <Container
          sx={{ maxWidth: "362px", height: "100vh", display: "flex",}}
          disableGutters
          maxWidth="362px"
        >
          <FriendLists />
        </Container>
    </>
  )
}
