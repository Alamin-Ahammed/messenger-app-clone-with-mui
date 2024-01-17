import {
  Box,
  Container,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import OutletHeadingWithIcon from "../../Components/CustomComponents/OutletHeadingWithIcon/OutletHeadingWithIcon";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

export default function Requests() {
  const [isActive, setIsActive] = useState(true);
  return (
    <Container
      sx={{ width: "inherit", height: "inherit", p: "0.2rem 1rem" }}
      disableGutters
    >
      <OutletHeadingWithIcon
        styles={{ padding: "0" }}
        headingText="Requests"
        icon={<MdEdit />}
      />
      <Box
        sx={{
          width: "100%",
          border: "1px solid #f1f1f1",
          borderRadius: "2rem",
          my: "1rem",
        }}
      >
        <List sx={{ display: "flex" }} disablePadding>
          <ListItemButton
            disableTouchRipple
            onClick={() => setIsActive(true)}
            sx={{
              borderRadius: "2rem",
              padding: "0.5rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              "&:hover": {
                bgcolor: "#DCDCDC",
              },
              bgcolor: isActive ? "rgba(220,220,220,0.8)" : "#fff",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: isActive ? 500 : 400,
              }}
            >
              You may know
            </Typography>
          </ListItemButton>
          <ListItemButton
            disableTouchRipple
            onClick={() => setIsActive(false)}
            sx={{
              borderRadius: "2rem",
              padding: "0.5rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              "&:hover": {
                bgcolor: "#DCDCDC",
              },
              bgcolor: !isActive ? "rgba(220,220,220,0.8)" : "#fff",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: !isActive ? 500 : 400,
              }}
            >
              spam
            </Typography>
          </ListItemButton>
        </List>
      </Box>
      <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
        You can open a message request for more info on who sent it. They won't
        be notified you opened it.
      </Typography>
      <Box sx={{ pt: "1rem", textAlign: "center" }}>No messages found.</Box>
    </Container>
  );
}
