import { Box, Button, Divider, Modal, Tooltip } from "@mui/material";
import { IoChatbubble } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { HiArchive } from "react-icons/hi";
import { LuPanelLeftOpen } from "react-icons/lu";
import MenuIcon from "../../MenuIcon/MenuIcon";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";
import ProfileTooltip from "../ProfileTooltip/ProfileTooltip";
import { useState } from "react";

const MenuIcons = [
  {
    path: "/",
    icon: <IoChatbubble />,
  },
  {
    path: "myFriends",
    icon: <IoPeople />,
  },
  {
    path: "store",
    icon: <FaStore />,
  },
  {
    path: "Requests",
    icon: <IoChatbubbleEllipses />,
  },
  {
    path: "archive",
    icon: <HiArchive />,
  },
];
/* Here all the image of MenuImageIcons will come from database. It is the group images the logged in user is currently in. */
const MenuImageIcons = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

export default function MenuBar() {
  const [showProfielTools, setShowProfileTools] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleShowAllUserInMessenger = () => {
    setOpenModal(!openModal);
    setShowTooltip(false);
  };
  return (
    <>
      <Box
        sx={{
          borderRight: "1px solid #ccc",
          height: "100vh",
          width: "fit-content",
          py: "0.67rem",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ gap: "0rem" }}>
          {MenuIcons.map((menuIcon) => (
            <NavLink to={menuIcon.path} key={menuIcon.path}>
              <MenuIcon icon={menuIcon.icon} />
            </NavLink>
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
          <Tooltip
            disableFocusListener
            disableHoverListener
            disableTouchListener
            open={showProfielTools}
            sx={{ padding: "0" }}
            // title={<ProfileTooltip />}
            arrow
            placement="top-start"
          >
            <img
              onClick={() => setShowProfileTools(!showProfielTools)}
              style={{
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
              src="https://picsum.photos/200"
              alt="Profile Image"
            />
          </Tooltip>
          <Tooltip
            title="Explore And Make Friends."
            arrow
            placement="right"
            disableInteractive
            open={showTooltip}
          >
            <Box>
              <Box
                onMouseEnter={() => setShowTooltip(true)}
                onClick={handleShowAllUserInMessenger}
              >
                <MenuIcon icon={<LuPanelLeftOpen />} />
              </Box>
              <Modal open={openModal} onClose={handleShowAllUserInMessenger}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100vw",
                    height: "100vh",
                    bgcolor: "background.paper",
                    p: 1,
                  }}
                >
                  {/* Here all the Modal element goes..... */}
                  <Button
                    variant="outlined"
                    onClick={handleShowAllUserInMessenger}
                  >
                    Exit --{">"}
                  </Button>
                </Box>
              </Modal>
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
