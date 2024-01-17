import { Box, IconButton, Typography } from "@mui/material";
import { RiEditBoxLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import MenuIcon from "../../MenuIcon/MenuIcon";
import TextField from "../../CustomComponents/TextFeild/TextField/TextField";
import ProfileCard from "../../ProfileCard/ProfileCard";
import OutletHeadingWithIcon from "../../CustomComponents/OutletHeadingWithIcon/OutletHeadingWithIcon";

/* Here profiles of friends lists will come from database it's also used in ChatBox component to show AddSomeFriends component remember to change there */
const profiles = [1];

export default function FriendLists() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <OutletHeadingWithIcon
          headingText="Chats"
          icon={
            <RiEditBoxLine
              style={{
                color: "black",
                fontSize: "1.35rem",
              }}
            />
          }
        />

        <Box sx={{ paddingInline: "1rem", pb: "1rem" }}>
          <TextField
            data={{
              leftIcon: <IoSearch />,
              type: "text",
              placeholder: "Search Messenger",
              styles: {
                width: "100%",
                borderRadius: "1rem",
                border: "1px solid #ccc",
                background: "#F3F3F5",
                opacity: "0.8",
              },
            }}
          />
        </Box>

        <Box sx={{ py: "0.5rem", height: "inherit", overflow: "auto" }}>
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              data={{
                // here image,title,subheader will come from database
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
              active={"sm"}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
