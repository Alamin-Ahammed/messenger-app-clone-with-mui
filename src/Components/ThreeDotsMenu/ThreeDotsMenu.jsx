import { FaFacebook } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import { Box, Typography } from "@mui/material";

export default function ThreeDotsMenu() {
  return (
    <Box
      sx={{
        width: "clamp(260px, 40vw, 330px)",
        display: { xs: "none", md: "block" },
        borderLeft: "1px solid #ccc",
      }}
    >
      <ProfileCard
        data={{
          // here image,title,subheader will come from database
          image: <img src="https://picsum.photos/200" />,
          styles: {
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
            "&:hover": {
              backgroundColor: "#fff",
            },
            avatarStyles: {
              width: "100px",
              height: "100px",
              marginBottom: "1rem",
            },
          },
          title: (
            <Typography
              variant="h6"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Profile Name
            </Typography>
          ),
          subheader: "active now",
        }}
        active={"lg"}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
          height: "max-content",
          "div > svg": {
            display: "inline-block",
            fontSize: "1rem",
            bgcolor: "#E9E9E9",
            width: "40px",
            height: "40px",
            padding: "0.6rem",
            borderRadius: "50%",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "#D4D4D4",
            },
          },
        }}
      >
        <Box>
          <FaFacebook />
          <Typography sx={{ fontSize: "0.8rem" }}>Profile</Typography>
        </Box>
        <Box>
          <IoIosNotifications />
          <Typography sx={{ fontSize: "0.8rem" }}>Mute</Typography>
        </Box>
        <Box>
          <IoSearch />
          <Typography sx={{ fontSize: "0.8rem" }}>Search</Typography>
        </Box>
      </Box>
    </Box>
  );
}
