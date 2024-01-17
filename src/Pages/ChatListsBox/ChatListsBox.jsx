import { Container } from "@mui/material";
import FriendLists from "../../Components/ImpureComponents/FriendLists/FriendLists";

export default function ChatListsBox() {
  return (
    <>
        <Container
          sx={{ display: "flex",}}
          disableGutters
          maxWidth="362px"
        >
          <FriendLists />
        </Container>
    </>
  )
}
