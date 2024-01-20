import { Box } from "@mui/material";
import CircleListIcon from "../../CustomComponents/CircleListIcon/CircleListIcon";
import ProfileCard from "../../ProfileCard/ProfileCard";


export default function ChatBoxHeader({ NavbarMenuListIcons }) {
 

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
            active={"md"}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {NavbarMenuListIcons.map((item, index) => (
            <CircleListIcon key={index} handler={item.handler} icon={item.icon} />
          ))}
        </Box>
      </Box>
    </>
  );
}
