import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Divider, IconButton, Tooltip, Typography } from "@mui/material";
import { IoChatbubble } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { HiArchive } from "react-icons/hi";
import { LuPanelLeftOpen } from "react-icons/lu";
import { RiEditBoxLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
import { PiStickerFill } from "react-icons/pi";
import { MdGifBox } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import { IoMdThumbsUp } from "react-icons/io";
import { BiSolidShare } from "react-icons/bi";
import { FiSmile } from "react-icons/fi";
import TextField from "../../Components/CustomComponents/TextFeild/TextField/TextField";
import MenuIcon from "../../Components/MenuIcon/MenuIcon";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import CircleListIcon from "../../Components/CustomComponents/CircleListIcon/CircleListIcon";
import Messege from "../../Components/Messege/Messege";

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

const ChatFooterIcons = [
  <IoIosAddCircle />,
  <FaImage />,
  <MdGifBox />,
  <PiStickerFill />,
];

const messeges = [
  {
    user: true,
    text: "Assalamuwalaikum",
  },
  { text: "walaikumussalam" },
  {
    user: true,
    text: "What are you doing?",
  },
  { text: "Nothing" },
  {
    user: true,
    text: "I'm doing my work",
  },
  {
    user: true,
    text: "Assalamuwalaikum",
  },
  { text: "walaikumussalam" },
  {
    user: true,
    text: "What are you doing?",
  },
  { text: "Nothing" },
  {
    user: true,
    text: "I'm doing my work",
  },
  { text: "walaikumussalam" },
  {
    user: true,
    text: "What are you doing?",
  },
  { text: "Nothing" },
  {
    text: "I'm doing my work too now",
  },
];

const chatOptions = [
  { toolTip: "Emoji", icon: <FiSmile /> },
  { toolTip: "Share", icon: <BiSolidShare /> },
  { toolTip: "Options", icon: <BsThreeDotsVertical /> },
];

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
                    background: '#F3F3F5',
                    opacity: '0.8'
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
              display: "flex",
              flexDirection: "column",
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
                  <CircleListIcon key={index} icon={icon} />
                ))}
              </Box>
            </Box>

            {/* chat body box */}
            <Box sx={{ flex: "1 1 100%", overflow: "auto", p: "0.5rem" }}>
              {/* all messege goes here. It will also come from database. */}
              {messeges.map((messege, index) =>
                messege.user ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: 'center',
                      my: "1rem",
                      "&:hover > #toolTip": {
                        display: "flex",
                      },
                    }}
                  >
                    <Box id="toolTip" sx={{ display: "none", gap: "0.2rem" }}>
                      {[...chatOptions].reverse().map((option, index) => (
                        <Tooltip
                          title={option.toolTip}
                          arrow
                          enterDelay={200}
                          placement="top"
                        >
                          <Box>
                            <CircleListIcon
                              key={index}
                              icon={option.icon}
                              styles={{
                                padding: "0.2rem",
                                fontSize: "1.1rem",
                                color: "grey",
                                "&:hover": { color: "grey" },
                              }}
                            />
                          </Box>
                        </Tooltip>
                      ))}
                    </Box>
                    <Messege
                      key={index}
                      Text={messege.text}
                      styles={{ float: "right" }}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "0.5rem",
                      my: "0.8rem",
                      "&:hover > #toolTip": {
                        display: "flex",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src="https://picsum.photos/200"
                        alt="Profile Image"
                      />
                    </Box>
                    <Messege
                      key={index}
                      Text={messege.text}
                      styles={{ bgcolor: "#F0F0F0", color: "black" }}
                    />
                    <Box id="toolTip" sx={{ display: "none", gap: "0.2rem" }}>
                      {chatOptions.map((option, index) => (
                        <Tooltip
                          title={option.toolTip}
                          arrow
                          enterDelay={200}
                          placement="top"
                        >
                          <Box>
                            <CircleListIcon
                              key={index}
                              icon={option.icon}
                              styles={{
                                padding: "0.2rem",
                                fontSize: "1.1rem",
                                color: "grey",
                                "&:hover": { color: "grey" },
                              }}
                            />
                          </Box>
                        </Tooltip>
                      ))}
                    </Box>
                  </Box>
                )
              )}
            </Box>

            {/* chat footer box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                px: "0.3rem",
                pb: "0.3rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {ChatFooterIcons.map((icon, index) => (
                  <CircleListIcon key={index} icon={icon} />
                ))}
              </Box>
              <Box sx={{ width: "100%" }}>
                <TextField
                  data={{
                    type: "text",
                    placeholder: "Aa",
                    rightIcon: (
                      <FaSmile
                        style={{
                          color: "#0976F2",
                          cursor: "pointer",
                          opacity: 1,
                        }}
                      />
                    ),
                    styles: {
                      background: "#f5f5f5",
                      borderRadius: "1rem",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
              <Box>
                <CircleListIcon icon={<IoMdThumbsUp />} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}
