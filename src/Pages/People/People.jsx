import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

export default function People() {
  return (
    <Container disableGutters>
      <Box sx={{px: '0.8rem'}}>
        <Typography
          variant="h4"
          component={"h4"}
          sx={{ fontSize: "1.5rem", fontWeight: 800, my: "1rem" }}
        >
          People
        </Typography>
        <Typography variant="body2" component={"p"}>
          Active contacts (1)
        </Typography>
      </Box>
      <Box>
        <ProfileCard
          data={{
            image: <img src="https://picsum.photos/200" />,
            title: "Profile Name",
          }}
          active={'sm'}
        />
      </Box>
    </Container>
  );
}
