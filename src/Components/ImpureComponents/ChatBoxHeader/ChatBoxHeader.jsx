import { Box } from "@mui/material";
import CircleListIcon from "../../CustomComponents/CircleListIcon/CircleListIcon";
import ProfileCard from "../../ProfileCard/ProfileCard";
import { IoCall } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const NavbarMenuListIcons = [<IoCall />, <IoVideocam />, <BsThreeDots />];

export default function ChatBoxHeader() {
  return (
    <>
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
              // image,title,subheader will come from database
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
    </>
  );
}
