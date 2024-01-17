import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

export default function Archive() {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ fontSize: "1.5rem", fontWeight: 800, my: "1rem" }}
      >
        Archived chats
      </Typography>
      <Box>
        <ProfileCard data={{ image: <img src="https://picsum.photos/200" /> , title: "Profile Name",subheader: 'you: I know, you Gone for Forever.'}} />
      </Box>
    </Container>
  );
}
