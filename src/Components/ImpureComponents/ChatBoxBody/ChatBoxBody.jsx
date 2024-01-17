import { Box, Tooltip, Typography } from "@mui/material";
import CircleListIcon from "../../CustomComponents/CircleListIcon/CircleListIcon";
import Messege from "../../Messege/Messege";
import { FiSmile } from "react-icons/fi";
import { BiSolidShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProfileCard from "../../ProfileCard/ProfileCard";

const chatOptions = [
  { toolTip: "Emoji", icon: <FiSmile /> },
  { toolTip: "Share", icon: <BiSolidShare /> },
  { toolTip: "Options", icon: <BsThreeDotsVertical /> },
];

export default function ChatBoxBody({ messeges }) {
  return (
    <>
      <Box sx={{ flex: "1 1 100%", overflow: "auto", p: "0.5rem" }}>
        {/* all messege goes here. It will also come from database. */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            p: "1rem",
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
                avatarStyles: {
                  width: "100px",
                  height: "100px",
                  marginBottom: "1rem",
                },
              },
              title: <Typography variant="h6">Profile Name</Typography>,
              subheader: (
                <Box>
                  <Typography variant="body1">
                    You're friends on Messenger
                  </Typography>
                  <Typography variant="body1">Lives at Dhaka</Typography>
                </Box>
              ),
            }}
            active={"lg"}
          />
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            Your are now connected on Messagenger.
          </Typography>
        </Box>
        <>
          {messeges.map((messege, index) =>
            messege.user ? (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  my: "1rem",
                  "&:hover > .toolTip": {
                    display: "flex",
                  },
                }}
              >
                <Box
                  className="toolTip"
                  sx={{ display: "none", gap: "0.2rem" }}
                >
                  {[...chatOptions].reverse().map((option, index) => (
                    <Tooltip
                      key={option.toolTip}
                      title={option.toolTip}
                      arrow
                      enterDelay={200}
                      placement="top"
                      disableInteractive
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
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0.5rem",
                  my: "0.8rem",
                  "&:hover > .toolTip": {
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
                <Box
                  className="toolTip"
                  sx={{ display: "none", gap: "0.2rem" }}
                >
                  {chatOptions.map((option, index) => (
                    <Tooltip
                      key={option.toolTip}
                      title={option.toolTip}
                      arrow
                      enterDelay={200}
                      placement="top"
                      disableInteractive
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
        </>
      </Box>
    </>
  );
}
