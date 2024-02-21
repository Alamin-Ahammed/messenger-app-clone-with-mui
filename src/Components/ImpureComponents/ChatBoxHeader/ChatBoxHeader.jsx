import { Box } from "@mui/material";
import CircleListIcon from "../../CustomComponents/CircleListIcon/CircleListIcon";
import ProfileCard from "../../ProfileCard/ProfileCard";
import { IoPersonOutline } from "react-icons/io5";

export default function ChatBoxHeader({
  NavbarMenuListIcons,
  profileData = {},
}) {
  const { imageURL, profileName } = profileData;

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
              image: <img src={imageURL} /> || <IoPersonOutline />,
              title: profileName || "Profile Name",
              subheader: "Active Now",
              styles: {
                padding: "0.3rem",
                cursor: "pointer",
                avatarStyles: {
                  width: "37px",
                  height: "37px",
                },
                svg: {
                  fontSize: "1.5rem",
                },
              },
            }}
            active={"md"}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {NavbarMenuListIcons.map((item, index) => (
            <CircleListIcon
              key={index}
              handler={item.handler}
              icon={item.icon}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
