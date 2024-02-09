import Container from "@mui/material/Container";
import ChatBox from "../ChatBox/ChatBox";
import MenuBar from "../../Components/ImpureComponents/MenuBar/MenuBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Container disableGutters sx={{ display: "flex", }} maxWidth="100%">
        <MenuBar  />
        <Container
          sx={{
            maxWidth: "362px",
            height: "100vh",
            display: {xs: 'none',md: 'flex'},
            borderRight: "1px solid #ccc",
          }}
          disableGutters
          maxWidth="362px"
        >
          <Outlet />
        </Container>
        <ChatBox />
      </Container>
    </>
  );
}
