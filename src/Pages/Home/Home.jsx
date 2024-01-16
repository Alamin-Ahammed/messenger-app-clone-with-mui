import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Divider, IconButton, ListItemButton, Typography } from "@mui/material";
import { IoChatbubble } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { HiArchive } from "react-icons/hi";
import { LuPanelLeftOpen } from "react-icons/lu";
import { RiEditBoxLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import TextField from "../../Components/CustomComponents/TextFeild/TextField/TextField";
import MenuIcon from "../../Components/MenuIcon/MenuIcon";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const MenuIcons = [
  <IoChatbubble />,
  <IoPeople />,
  <FaStore />,
  <IoChatbubbleEllipses />,
  <HiArchive />,
];

/* Here all the image of MenuImageIcons will come from database. It is the group images the logged in user is currently in. */
const MenuImageIcons = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

const profiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const NavbarMenuListIcons = [<IoCall />, <IoVideocam />, <BsThreeDots />];

export default function Home() {
  return (
    <>
      <Container disableGutters sx={{ display: "flex" }} maxWidth="100%">
        <Container
          sx={{ maxWidth: "422px", height: "100vh", display: "flex" }}
          disableGutters
          maxWidth="422px"
        >
          <Box
            sx={{
              borderRight: "1px solid #ccc",
              height: "100vh",
              width: "fit-content",
              py: "0.67rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              {MenuIcons.map((icon, index) => (
                <MenuIcon key={index} icon={icon} />
              ))}

              <Divider sx={{ my: "1.5rem" }} variant="middle" />

              {/** Here all the image of MenuImageIcons will come from database. */}
              {MenuImageIcons.map((iconSrc, index) => (
                <MenuIcon key={index} icon={iconSrc} />
              ))}
            </Box>

            {/* This is the profile image section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                div: {
                  borderRadius: "50%",
                },
              }}
            >
              <img
                style={{ borderRadius: "50%", width: "30px", height: "30px" }}
                src="https://picsum.photos/200"
                alt="Profile Image"
              />
              <MenuIcon icon={<LuPanelLeftOpen />} />
            </Box>
          </Box>

          {/* This is the friend List section */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
              border: "1px solid #ccc",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 1rem 1rem 2rem",
              }}
            >
              <Typography
                variant="h1"
                sx={{ fontWeight: 900, fontSize: "1.5rem" }}
              >
                Chats
              </Typography>

              <Box
                sx={{
                  div: {
                    m: "0px",
                    borderRadius: "50%",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  },
                }}
              >
                <MenuIcon
                  icon={
                    <RiEditBoxLine
                      style={{
                        color: "black",
                        fontSize: "1.35rem",
                      }}
                    />
                  }
                />
              </Box>
            </Box>

            <Box sx={{ paddingInline: "1rem" }}>
              <TextField
                data={{
                  leftIcon: <IoSearch />,
                  type: "text",
                  placeholder: "Search Messenger",
                  styles: {
                    width: "100%",
                    borderRadius: "1rem",
                    border: "1px solid #ccc",
                  },
                }}
              />
            </Box>

            <Box sx={{ py: "0.5rem", height: "inherit", overflow: "auto" }}>
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  data={{
                    image: <img src="https://picsum.photos/200" />,
                    action: (
                      <IconButton
                        id="profile-card-action-button"
                        aria-label="settings"
                      >
                        <BsThreeDots id="profile-card-action-button-svg" />
                      </IconButton>
                    ),
                    title: "Profile Name",
                    subheader: "Your are now connected or Last Message",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>

        {/* This is the chat section */}
        <Container disableGutters maxWidth="100%">
          <Box
            sx={{
              bgcolor: "#fff",
              height: "100vh",
            }}
          >
            {/* chat header box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #ccc",
              }}
            >
              <Box sx={{ maxWidth: "200px" }}>
                <ProfileCard
                  data={{
                    image: <img src="https://picsum.photos/200" />,
                    title: "Profile Name",
                    subheader: "Active Now",
                    styles: {
                      padding: "0.3rem",
                      cursor: "pointer",
                      avatarStyles: {
                        width: "37px",
                        height: "37px",
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {NavbarMenuListIcons.map((icon, index) => (
                  <ListItemButton
                    key={index}
                    sx={{
                      borderRadius: "50%",
                      padding: "0.5rem",
                      color: "#0976F2",
                      fontSize: "1.3rem",
                      fontWeight: 900,
                    }}
                  >
                    {icon}
                  </ListItemButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}
